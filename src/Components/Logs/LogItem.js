import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const LogItem = ({ log, deleteLogItem, getSingleLog }) => {
  return (
    <div>
      <li className="collection-item">
        <div onClick={() => getSingleLog(log.id)}>
          <a
            href="#edit-log-modal"
            className={`modal-trigger ${
              log.attention ? "red-text" : "blue-text"
            }`}
          >
            {log.message}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID #{log.id} </span>
            Last Updated By
            <span className="black-text"> {log.tech} </span> on{" "}
            <Moment format="MMMM Do YYYY , h:mm:ss a"></Moment>
          </span>
          <a
            href="#!"
            onClick={() => deleteLogItem(log.id)}
            className="secondary-content"
          >
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </li>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
