import { SpeedInsights } from "@vercel/speed-insights/next"
import { Roboto } from 'next/font/google';

import './globals.css';
import Nav from '../components/Nav';
import AuthProvider from '@/components/providers/AuthProvider';

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'NetFlix - Watch TV shows, Movies, and more',
  description: 'Browse hundreds of movies and more',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      {/* <meta name="google-site-verification" content="zQEd6I58WQEdE6WNKQklg8z6U0u68388at3Rsdkjzh4" /> */}
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <Nav />
          {children}
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  )
}
