import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Enemy = {
  id: string; // Unique identifier for each enemy
  content: string; // The word to be typed
  position: { x: number; y: number }; // Screen position
  speed: number; // Speed at which the enemy moves
  health: number; // Health of the enemy
  isActive: boolean; // If the enemy is currently active
  isTargeted: boolean; // If the enemy is currently targeted by the player
  completion: number; // How much of the word has been typed
};
interface EnemiesState {
  enemies: Record<string, Enemy>;
}

const initialState: EnemiesState = {
  enemies: {},
};

const enemiesSlice = createSlice({
  name: 'enemies',
  initialState,
  reducers: {
    setEnemies(state, action: PayloadAction<Record<string, Enemy>>) {
      state.enemies = action.payload;
    },
  },
});

export const { setEnemies } = enemiesSlice.actions;
export const { reducer: enemiesReducer } = enemiesSlice;
