import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Test from './component/Test'
function App() {
  const [count, setCount] = useState(0)

  return (

    <Router className="">
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </Router>

  )
}

export default App
