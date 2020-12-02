import {
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
  ADD_TECH,
  DELETE_TECH,
} from "../actions/types";

const initialState = {
  tech: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        tech: action.payload,
        loading: false,
      };

    case ADD_TECH: {
      return {
        ...state,
        tech: [...state.tech, action.payload],
        loading: false,
      };
    }

    case DELETE_TECH:
      let filterTech = state.tech.filter((e) => e.id !== action.payload);
      return {
        ...state,
        tech: filterTech,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
