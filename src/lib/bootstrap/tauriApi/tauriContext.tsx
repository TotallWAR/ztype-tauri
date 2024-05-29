'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import type { WindowManager, WebviewWindow } from '@tauri-apps/api/window';
import { setTauriApi } from '@/lib/bootstrap/tauriApi/tauriService';
import { useAppDispatch } from '@/lib/store/hooks';
import { initTauriApi } from '@/lib/bootstrap/bootstrapSlice';

type Props = {
  children: ReactNode;
};

export interface ITauriWindowApi {
  appWindow: WindowManager;
  WebviewWindow: typeof WebviewWindow;
}

export type TauriApi = {
  window?: ITauriWindowApi;
};

const TauriContext = createContext<TauriApi>({});

export const TauriProvider = ({ children }: Props) => {
  const [tauriApi, setApi] = useState<TauriApi>({
    window: undefined,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadTauriApi = async () => {
      console.log('loadTauriApi');
      const tauriWindowApi = await import('@tauri-apps/api/window');
      const _api = {
        window: {
          appWindow: tauriWindowApi.appWindow,
          WebviewWindow: tauriWindowApi.WebviewWindow,
        },
      };
      setTauriApi(_api);
      setApi(_api);
      dispatch(initTauriApi());
    };

    loadTauriApi();
  }, []);

  return (
    <TauriContext.Provider value={tauriApi}>{children}</TauriContext.Provider>
  );
};

export const useTauri = () => useContext(TauriContext);
