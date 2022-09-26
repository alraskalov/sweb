import { vpsTypes } from "../constants";

export const fetchVpsRequest = () => ({
  type: vpsTypes.FETCH_VPS_REQUEST,
});

export const fetchVpsSuccess = (payload) => ({
  type: vpsTypes.FETCH_VPS_SUCCESS,
  payload,
});

export const fetchVpsFailure = (payload) => ({
  type: vpsTypes.FETCH_VPS_FAILURE,
  payload,
});
