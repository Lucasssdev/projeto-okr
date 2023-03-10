
import React from 'react'
import '../assets/Styles/global.css'
export default function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)

}
