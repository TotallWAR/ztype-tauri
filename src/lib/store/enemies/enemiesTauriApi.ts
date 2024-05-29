import { invoke } from '@tauri-apps/api/tauri';

export const fetchEnemiesState = async () => {
  return await invoke('get_enemies_state');
};
