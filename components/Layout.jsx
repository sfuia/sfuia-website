import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div suppressHydrationWarning={true}>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}