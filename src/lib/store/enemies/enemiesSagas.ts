import { takeLatest, put, delay, call } from 'redux-saga/effects';
import { setEnemies } from './enemiesSlice';
import { fetchEnemiesState } from '@/lib/store/enemies/enemiesTauriApi';

export function* watchEnemies() {
  yield takeLatest('todo', updateEnemiesStateSaga);
}

export function* updateEnemiesStateSaga() {
  try {
    // TODO
    // const response: any = yield call(fetchEnemiesState);
    // const data = JSON.parse(response as string);
    // yield put(setEnemies(dadffta.positions));
    return {};
  } catch (error) {
    console.error('Failed to fetch enemy data:', error);
    // Handle error, e.g., by setting an error state or retrying
  }
}
