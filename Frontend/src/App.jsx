import React from 'react'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './landing_page/home/Navbar'
import Footer from './landing_page/Footer'
import Signup from './landing_page/signup/Signup'
import ProductPage from './landing_page/products/ProductPage'
import SupportPage from './landing_page/support/SupportPage'



export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
         <Route path='/SignUp' element={<Signup/>}></Route>
        <Route path='/About' element={<AboutPage/>}></Route>
      <Route path="/products" element={<ProductPage />} />

        <Route path='/Priciing' element={<PricingPage/>}></Route>
        <Route path='/Support' element={<SupportPage/>}></Route>
        
      </Routes>
      <Footer/>
     </BrowserRouter>
      
    </div>
  )
}
