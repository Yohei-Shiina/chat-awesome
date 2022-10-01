import React from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import '../styles/globals.scss'
import { Session } from 'next-auth'

function App({
   Component, 
   pageProps: { session, ...pageProps } 
}: (AppProps<{session: Session}>)) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
