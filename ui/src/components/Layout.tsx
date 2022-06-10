import React from 'react'
import type { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from './NavBar'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>%pics</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/session.js"></script>
      </Head>
      <NavBar />
      <main>
        {children}
      </main>
    </>
  )
}