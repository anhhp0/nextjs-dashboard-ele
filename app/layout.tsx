import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import '@/app/ui/global.css';
//import './ui/global.css';
import { inter } from '@/app/ui/fonts';
// import { lusitana } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
                <Analytics />
        <SpeedInsights />

      </body>
      {/* <body className={`${lusitana.className} antialiased`}>{children}</body> */}

    </html>
  );
}
