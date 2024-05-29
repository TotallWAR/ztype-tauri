import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/lib/store/StoreProvider';
import { ReactNode } from 'react';
import { TauriProvider } from '@/lib/bootstrap/tauriApi/tauriContext';
import Head from 'next/head';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const metadata: Metadata = {
  title: 'Z-type',
  description: 'Type to win',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <StoreProvider>
            <TauriProvider>{children}</TauriProvider>
          </StoreProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
