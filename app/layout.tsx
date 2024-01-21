import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TicketTrek',
  description:
    'es una emocionante startup dedicada a facilitar la tediosa tarea de seleccionar y reservar boletos de autobús de manera eficiente y conveniente. En un mercado donde la planificación de viajes en autobús puede ser desafiante y a menudo consume tiempo, BusTicketEase surge como una solución innovadora, ofreciendo un faro de confiabilidad y comodidad para los viajeros.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex min-h-screen flex-col transition-all'>
          <Navbar />
          <Hero />
          <main className='flex flex-col m-4 lg:mx-40'>{children}</main>
        </div>
      </body>
    </html>
  );
}
