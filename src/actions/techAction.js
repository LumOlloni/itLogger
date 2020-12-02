import {
  GET_TECHS,
  TECHS_ERROR,
  SET_LOADING,
  DELETE_TECH,
  ADD_TECH,
} from "./types";

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: "Delete",
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: tech.firstName,
        lastName: tech.lastName,
      }),
    });

    if (res.status === 201) {
      const data = await res.json();

      dispatch({
        type: ADD_TECH,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
