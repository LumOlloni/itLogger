import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs, deleteTech } from "../../actions/techAction";

const TechListModal = ({ tech: { tech, loading }, getTechs, deleteTech }) => {
  useEffect(() => {
    getTechs();
  }, []);
  return (
    <div className="modal" id="tech-list-modal">
      <div className="modal-content">
        <h4>Technicial List</h4>
        <ul className="collection">
          {!loading &&
            tech.map((tech) => (
              <TechItem
                deleteTech={deleteTech}
                tech={tech}
                className="collection-item"
                key={tech.id}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { deleteTech, getTechs })(
  TechListModal
);
