import { takeEvery, call, put } from "redux-saga/effects";
import { getVps } from "../../../utils/api";
import { fetchVpsFailure, fetchVpsSuccess } from "../../actions/vpsActions";
import { vpsTypes } from "../../constants";

function* workerFetchVps() {
  try {
    const vps = yield call(getVps);
    const {
      vpsPlans,
      selectOs,
      selectPanel,
      osPanel,
      datacenters,
      categories,
    } = vps.result;
    const modifCategories = categories.map((el) => {
      return {
        id: el.id,
        name: el.slug,
        description: el.name,
        prior: el.prior,
      };
    });
    yield put(
      fetchVpsSuccess({
        vpsPlans,
        selectOs,
        selectPanel,
        osPanel,
        datacenters,
        modifCategories,
      })
    );
  } catch (e) {
    yield put(
      fetchVpsFailure({
        eroror: e.message,
      })
    );
  }
}

function* vpsSaga() {
  yield takeEvery(vpsTypes.FETCH_VPS_REQUEST, workerFetchVps);
}

export default vpsSaga;
