import Footer from './Layouts/Footer.jsx';
import Navbar from './Layouts/Navbar.jsx'
import Shipping from './Pages/Shipping.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Terms from './Pages/Terms.jsx';

function App() {
  return (
    <Router>
      <div className='container mx-auto'>
        <Navbar />
        <Routes>
          <Route path='/returns' element={<Shipping />} />
          <Route path='/term' element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
