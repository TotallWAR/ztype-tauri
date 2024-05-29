import { invoke } from '@tauri-apps/api/tauri';
import { getWindowSize } from '@/lib/window/dimentions';
import { Enemy } from '@/lib/store/enemies/enemiesSlice';
import { parseResponse } from '@/lib/store/helpers';

export type SetupData = {
  enemies: Record<string, Enemy>;
};

export const setupGame = async () => {
  const windowSize = await getWindowSize();
  const r = await invoke<string>('setup_game', {
    window: [windowSize.width, windowSize.height],
  });
  console.log('setupGame: \n', r);
  return parseResponse<SetupData>(r);
};
