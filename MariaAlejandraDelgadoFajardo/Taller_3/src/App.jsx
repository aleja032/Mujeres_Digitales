import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <Form/>
  )
}

export default App
