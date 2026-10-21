import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {

  return (
    <div className="app">
      < Navbar />
      < Hero 
        name="María"
      />
      < Footer />
    </ div>
  )
}

export default App
