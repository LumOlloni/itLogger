import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addLogs } from "../../actions/logAction";
import M from "materialize-css/dist/js/materialize.min.js";
import { getTechs } from "../../actions/techAction";

const AddModal = ({ tech: { tech }, addLogs, getTechs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [techPerson, setTechPerson] = useState("");

  useEffect(() => {
    getTechs();
  }, []);

  const onSubmit = () => {
    if (!message || !techPerson) {
      M.toast({ html: "Please Enter a message and tech" });
    } else {
      addLogs({ message, attention, techPerson });
      setMessage("");
      setTechPerson("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Logs</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <select
            name="tect"
            value={techPerson}
            className="browser-default"
            onChange={(e) => setTechPerson(e.target.value)}
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

const mapStateToProps = (state) => ({
  log: state.log,
  tech: state.tech,
});

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(mapStateToProps, { addLogs, getTechs })(AddModal);
