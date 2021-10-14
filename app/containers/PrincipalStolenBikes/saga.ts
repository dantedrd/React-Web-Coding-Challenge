/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { setCountBikes, setErrorBikes, setStolenBikes } from 'containers/PrincipalStolenBikes/actions';
import ActionTypes from 'containers/PrincipalStolenBikes/constants';

import request from 'utils/request';


export function* getStolenBikes(props:any) {
  console.log(props.payload.timeBefore?props.payload.timeBefore.getTime():"")
  const requestURL = `https://bikeindex.org:443/api/v3/search?page=${props.payload.page}&per_page=${props.payload.perPage}&location=Berlin&distance=10&stolenness=proximity&query=${props.payload.search}`;
  try {
    const bikesData = yield call(request, requestURL);
    let bikes=bikesData.bikes;
    if(props.payload.timeBefore&&props.payload.timeAfter){
      bikes=bikesData.bikes.filter(bike=>bike.date_stolen>props.payload.timeBefore.getTime()&&bike.date_stolen<props.payload.timeAfter.getTime())
    }
    yield put(setStolenBikes(bikes));
  } catch (err) {
    yield put(setErrorBikes(err));
  }
}

export function* getCountBikes(props:any) {
  const requestURL = `https://bikeindex.org:443/api/v3/search/count?page=${props.payload.page}&per_page=${props.payload.perPage}&location=Berlin&distance=10&stolenness=proximity&query=${props.payload.search}`;
  try {
    const repos = yield call(request, requestURL);
    yield put(setCountBikes(repos));
  } catch (err) {
    yield put(setErrorBikes(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(ActionTypes.GET_STOLEN_BIKES, getStolenBikes);
  yield takeLatest(ActionTypes.GET_COUNT_BIKES,getCountBikes);
}
