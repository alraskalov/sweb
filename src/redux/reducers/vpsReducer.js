import { vpsTypes } from "../constants";

const initialState = {
  pending: false,
  vpsPlans: [],
  selectOs: [],
  selectPanel: [],
  osPanel: [],
  datacenters: [],
  categories: [],
  error: null,
};

const vpsReducer = (state = initialState, action) => {
  switch (action.type) {
    case vpsTypes.FETCH_VPS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case vpsTypes.FETCH_VPS_SUCCESS:
      return {
        ...state,
        pending: false,
        vpsPlans: [...action.payload.vpsPlans],
        selectOs: [...action.payload.selectOs],
        selectPanel: [...action.payload.selectPanel],
        osPanel: [...action.payload.osPanel],
        datacenters: [...action.payload.datacenters],
        categories: [...action.payload.categories],
        error: null,
      };
    case vpsTypes.FETCH_VPS_FAILURE:
      return {
        ...state,
        pending: false,
        vps: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default vpsReducer;
