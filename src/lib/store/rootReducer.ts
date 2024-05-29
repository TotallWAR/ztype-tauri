import { combineReducers } from '@reduxjs/toolkit';
import { enemiesReducer } from './enemies/enemiesSlice';

const rootReducer = combineReducers({
  enemies: enemiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
