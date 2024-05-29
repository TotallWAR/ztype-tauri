'use client';

import { getTauriWindowApi } from '@/lib/bootstrap/tauriApi/tauriService';

export async function getWindowSize() {
  const { appWindow } = getTauriWindowApi();
  const factor = await appWindow.scaleFactor();
  const size = await appWindow.innerSize();
  return size.toLogical(factor);
}
