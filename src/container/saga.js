import { takeLatest, put, call, select } from 'redux-saga/effects';
import { ACTION_CLICK } from '../constants/constants.js';
import {fetchdata} from './fetchdata';
import {getApiData} from '../container/Actions/Actions.js'


function* ClickAsync() {
    const searchItem = yield select(state => state.search)
    const data = yield call(fetchdata, searchItem);
    yield put(getApiData(data));
}

export function* rootSaga() {
    yield takeLatest(ACTION_CLICK, ClickAsync)
}