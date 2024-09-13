import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Attribution from './components/Attribution';
import './App.css'

function App() {

  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <Card />
      {/* <Attribution /> */}
    </main>
  )
}

export default App
