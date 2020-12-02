import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../Layout/Preloader";
import { connect } from "react-redux";
import { getLogs, deleteLog, getSingleLog } from "../../actions/logAction";

const Logs = ({
  log: { logs, loading, text },
  getLogs,
  deleteLog,
  getSingleLog,
}) => {
  useEffect(() => {
    // eslint-disable-next-line
    getLogs();
  }, []);

  const filterLog = () => {
    if (!loading && logs) {
      return logs.filter((e) =>
        e.message.toLowerCase().includes(text.toLowerCase())
      );
    }
  };

  if (loading || logs === null) return <Preloader />;

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center"> System Logs </h4>{" "}
      </li>{" "}
      {!loading && logs.length === 0 ? (
        <p className="center"> No Logs To Show </p>
      ) : (
        filterLog().map((e) => (
          <LogItem
            getSingleLog={getSingleLog}
            deleteLogItem={deleteLog}
            log={e}
            key={e.id}
          ></LogItem>
        ))
      )}{" "}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs, deleteLog, getSingleLog })(
  Logs
);
