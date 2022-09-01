import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div suppressHydrationWarning={true}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}