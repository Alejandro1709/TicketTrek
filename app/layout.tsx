import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TicketTrek',
  description:
    'Es una emocionante startup dedicada a facilitar la tediosa tarea de seleccionar y reservar boletos de autobús de manera eficiente y conveniente. En un mercado donde la planificación de viajes en autobús puede ser desafiante y a menudo consume tiempo, BusTicketEase surge como una solución innovadora, ofreciendo un faro de confiabilidad y comodidad para los viajeros.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('flex flex-col min-h-screen', inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='flex-1 mx-8'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
