import React from 'react'
import Link from 'next/link'
import { useUrbitReact } from '../context'

export default function NavBar() {
  const { urbit } = useUrbitReact()

  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/profile'>{`~${urbit.ship}`}</Link>
    </nav>
  )
}