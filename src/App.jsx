import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div className="App">
     <Navbar/>
     <main>
      <Sidebar/>
     </main>
    </div>
  )
}

export default App
