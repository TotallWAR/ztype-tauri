import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {}

const initialState: State = {};

const bootstrapSlice = createSlice({
  name: 'bootstrap',
  initialState,
  reducers: {},
});

export const {} = bootstrapSlice.actions;

export const initGame = createAction<void>('bootstrap/initGame');
export const initTauriApi = createAction<void>('bootstrap/initTauriApi');
export default bootstrapSlice.reducer;
