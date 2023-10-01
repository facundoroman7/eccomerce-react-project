import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
import Cart from './Components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Footer from './Components/Footer'


function App() {


  return (
    <>



      <BrowserRouter>

        <CartProvider>
          <NavBar />

          <Routes>

            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />

          </Routes>
          <Footer />
        </CartProvider>

      </BrowserRouter>



    </>
  )
}

export default App
