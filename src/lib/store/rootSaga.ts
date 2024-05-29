import { all, fork } from 'redux-saga/effects';
import { mainLoopSaga } from './mainLoopSaga';
import { bootstrapSaga } from '@/lib/bootstrap/bootstrapSagas';

export default function* rootSaga() {
  console.log('rootSaga');
  yield all([
    // fork(mainLoopSaga),
    bootstrapSaga(),
  ]);
}
