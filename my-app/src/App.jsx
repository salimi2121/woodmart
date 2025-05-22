import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Food from './component/Food';
import PopularProducts from './component/PopularProducts';




export default function App() {
  return (
      <Router>
        <Food />
        
      </Router>
  );
}

// <div dir="rtl">
//       <Food /> ,
   
     
//       <PopularProducts /> ,
//       <Footer />
//     </div>


// function App() {
//   // const [count, setCount] = useState(0)

//   return (
    
//     <Router className="">
//           <p style={{ padding: '10px' }}>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>خانه</Link>
//             <span> / </span>
//             <span>غذای گربه</span>
//           </p>
//       <Routes>   
//         <>

        
//           {/* <Route path="/" element={<HomePage />} /> */}
//           <Route path="/food" element={<Food />} />
//         </>
//       </Routes>
//     </Router>

//   )

// }

// export default App

