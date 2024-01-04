import Footer from './Layouts/Footer.jsx';
import Navbar from './Layouts/Navbar.jsx'
import Shipping from './Pages/Shipping.jsx'
// import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Shipping />
      <Footer />
    </div>
  )
}

export default App;
