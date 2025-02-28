import React from 'react' 
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
