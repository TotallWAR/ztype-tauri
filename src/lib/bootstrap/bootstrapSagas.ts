import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { SetupData, setupGame } from '@/lib/bootstrap/bootstrapTauriApi';
import { setEnemies } from '@/lib/store/enemies/enemiesSlice';
import { initGame, initTauriApi } from '@/lib/bootstrap/bootstrapSlice';

export function* bootstrapSaga() {
  yield takeEvery(initGame, function* setupGameImpl() {
    yield take(initTauriApi);
    const data: SetupData = yield call(setupGame);
    yield put(setEnemies(data.enemies));
  });
}
