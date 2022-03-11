import React from 'react'
import { LayoutProps } from '../../interfaces/GlobalInterface'

function Layout({ children }: LayoutProps) {
  return <div className='wrapper'>{children}</div>
}

export default Layout
