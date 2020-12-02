import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { editLog } from "../../actions/logAction";

const EditLogModal = ({ tech: { tech }, log: { singLog }, editLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [techPerson, setTech] = useState("");

  const arrCheck =
    [singLog.message, singLog.attention, singLog.tech].filter(Boolean).length >
    0;

  useEffect(() => {
    if (arrCheck) {
      setMessage(singLog.message);
      setTech(singLog.tech);
      setAttention(singLog.attention);
    }
  }, [arrCheck]);

  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: "Please Enter a message and tech" });
    } else {
      editLog({ message, attention, tech: techPerson, id: singLog.id });
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Log </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <select
            name="tect"
            value={techPerson}
            className="browser-default"
            onChange={(e) => setTech(e.target.value)}
          >
            <option value="" disabled>
              Select Technician
            </option>
            {tech.map((e) => (
              <option key={e.id} value={`${e.firstName} ${e.lastName}`}>
                {e.firstName} {e.lastName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </p>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green btn"
        >
          Enter{" "}
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = (state) => ({
  log: state.log,
  tech: state.tech,
});

export default connect(mapStateToProps, { editLog })(EditLogModal);
