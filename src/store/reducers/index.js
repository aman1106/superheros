import {
  GET_SUPERHEROS_SUCCESS
} from "../../constants/ActionTypes";

const INIT_STATE = {
  names: '',
  loader: true,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SUPERHEROS_SUCCESS: {
      return {
        ...state,
        names: action.payload,
        loader: false,
      }
    }
    default:
      return state;
  }
}
