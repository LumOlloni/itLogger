import {
  GET_LOGS,
  SET_LOADING,
  SEARCH_LOGS,
  GET_SINGLE_LOG,
  LOGS_ERROR,
  EDIT_LOG,
  ADD_LOG,
  DELETE_LOG,
} from "../actions/types";

const initialState = {
  logs: null,
  singLog: {},
  current: null,
  text: "",
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };

    case EDIT_LOG: {
      return {
        ...state,
        logs: state.logs.map((e) => {
          if (e.id === action.payload.id) {
            e = action.payload;
          }
          return e;
        }),

        loading: false,
      };
    }

    case SEARCH_LOGS:
      return {
        ...state,
        text: action.payload,
      };

    case GET_SINGLE_LOG:
      let findLog = state.logs.find((e) => e.id === action.payload);
      console.log("find Log", findLog);
      return {
        ...state,
        singLog: findLog,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };

    case DELETE_LOG:
      let filterLogs = state.logs.filter((e) => e.id !== action.payload);
      return {
        ...state,
        logs: filterLogs,
        loading: false,
      };

    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
