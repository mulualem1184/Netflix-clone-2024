import { useState } from 'react';
import Home from './pages/home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Banner from './components/banner/banner';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <Header />
    <Banner/>
     <Footer />
      
   </>
  )
}

export default App
