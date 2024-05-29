'use client';

import { call } from 'redux-saga/effects';
import { updateEnemiesStateSaga, watchEnemies } from './enemies/enemiesSagas';
import { requestAnimationFramePromise } from '@/lib/store/helpers';

export function* mainLoopSaga() {
  // while (true) {
  // yield call(updateEnemiesStateSaga);
  // Wait for the next animation frame
  // yield call(requestAnimationFramePromise);
  // }
}
