import { Roboto } from 'next/font/google';

import './globals.css';
import Nav from '../components/Nav';

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'NetFlix - Watch TV shows, Movies, and more',
  description: 'Browse hundreds of movies and more',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
