import '@mantine/core/styles.css';
import '@/styles/globals.scss';
import '@mantine/carousel/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '@/styles/theme';
import styles from './layout.module.scss';
import { Footer, FooterMob } from '@/components';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
          <title>Malltique</title>
      </head>
      <body>
      <MantineProvider theme={theme}>
          <div className={styles.wrapper}>
              <header className={styles.header}>
                  <div className={styles.content}>
                      header
                  </div>
              </header>
              <main className={styles.main}>{children}</main>
              <Footer className={styles.footer} />
              <FooterMob className={styles.footerMobile} />
          </div>
      </MantineProvider>
      </body>
    </html>
  );
}
