import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/layout/Header';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cumbia  Shopping Store',
  description: 'Best place to shop online',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  

  return (
    <html lang='en'>
      <body suppressHydrationWarning className={`${montserrat.className} antialiased min-h-[125vh]`}>
        <Header />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
