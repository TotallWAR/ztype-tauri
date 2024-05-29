import { RootState } from '@/lib/store/store';

export const enemiesSelectors = (state: RootState) =>
  Object.keys(state.enemies.enemies).map((k) => state.enemies.enemies[k]);
