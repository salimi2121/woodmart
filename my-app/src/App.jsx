
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import IndexHomepage from './component/main/home-page/IndexHomepage';
function App() {

  return (

    <Router className="">
      <Routes>
        <Route path="/" element={<IndexHomepage/>} />

      </Routes>
    </Router>

  )
}

export default App
