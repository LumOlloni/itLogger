import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  EDIT_LOG,
  GET_SINGLE_LOG,
  ADD_LOG,
  DELETE_LOG,
} from "./types";

// get Logs From Server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: "Delete",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getSingleLog = (id) => (dispatch) => {
  dispatch({
    type: GET_SINGLE_LOG,
    payload: id,
  });
};

export const editLog = (log) => async (dispatch) => {
  try {
    await fetch(`/logs/${log.id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: log.message,
        tech: log.techPerson,
        data: Date.now(),
        attention: log.attention,
      }),
    });

    dispatch({
      type: EDIT_LOG,
      payload: log,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const addLogs = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: log.message,
        tech: log.techPerson,
        data: Date.now(),
        attention: log.attention,
      }),
    });
    const data = await res.json();
    // setLoading();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// setLoading TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
