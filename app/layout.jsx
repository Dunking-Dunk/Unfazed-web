import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { Montserrat } from 'next/font/google'

import '@/helpers/gsap.js'
import Cursor from '@/components/dom/Cursor'
import Header from '@/components/dom/Header'

export const metadata = {
  title: 'Unfazed',
  description: 'Creative Agency',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={montserrat.className} >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='antialiased'>
        <Cursor />
        <Header />
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
