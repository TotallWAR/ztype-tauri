import { TauriApi } from '@/lib/bootstrap/tauriApi/tauriContext';

let tauriApi: TauriApi | undefined;

export const setTauriApi = (api: TauriApi) => {
  console.log('setTauriApi;');
  tauriApi = api;
};

export const getTauriWindowApi = () => {
  if (!tauriApi || !tauriApi.window) {
    throw new Error('Tauri window API is not initialized');
  }
  return tauriApi.window;
};
