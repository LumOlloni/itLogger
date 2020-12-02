import React from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="nav-wrapper blue">
        <form>
          <div className="input-field">
            <input
              onChange={(e) =>
                dispatch({
                  type: "SEARCH_LOGS",
                  payload: e.target.value,
                })
              }
              id="search"
              type="search"
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
export default SearchBar;
