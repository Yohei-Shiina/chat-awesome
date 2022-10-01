import React from 'react'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import { SessionProvider } from "next-auth/react"

import '../styles/globals.scss'

type Props = AppProps<{session: Session}>

function App({ Component, pageProps }: Props) {
  const { session } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
