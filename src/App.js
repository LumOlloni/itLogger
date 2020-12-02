import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Logs from "./Components/Logs/Logs";
import AddModal from "./Components/Logs/AddModal";
import EditLogModal from "./Components/Logs/EditLogModal";
import AddTechModal from "./Components/techs/AddTechModal";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AddBtn from "./Components/Layout/AddBtn";
import SearchBar from "./Components/Layout/SearchBar";
import TechListModal from "./Components/techs/TechListModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
