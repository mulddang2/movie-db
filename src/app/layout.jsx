import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import ReactQueryProvider from './utils/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MovieDB',
  description: 'movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <ReactQueryProvider>
          <Providers>
            <Header />
            <Navbar />
            <SearchBox />
            {children}
          </Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
