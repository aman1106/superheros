import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  GET_SUPERHEROS,
} from "../../constants/ActionTypes";
import {
  getSuperherosSuccess,
} from "../../store/actions";
import axios from 'axios';

const getSuperherosRequest = async () =>
  await  axios.get(`https://akabab.github.io/superhero-api/api/all.json`, {

    })
    .then(userData => userData)
    .catch(error => error);

function* getSuperherosData() {
  try {
    const getSuperheros = yield call(getSuperherosRequest);
    if(getSuperheros.message) {

    } else {
      yield put(getSuperherosSuccess(getSuperheros.data));
    }
  } catch (error) {

  }
}

export function* getSuperheros() {
  yield takeEvery(GET_SUPERHEROS, getSuperherosData)
}

export default function* rootSaga() {
  yield all([
    fork(getSuperheros)
  ]);
}
