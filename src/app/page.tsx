'use client';

import { useBootstrap } from '@/lib/bootstrap/useBootstrap';
import { Map } from '@/components/Map';

export default function Home() {
  useBootstrap();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Map />
    </main>
  );
}
