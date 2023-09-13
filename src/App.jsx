import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
import Cart from './Components/Cart'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>

        <BrowserRouter>
          <NavBar />

          <Routes>

              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
              <Route exact path='/item/:id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart />} />
              
          </Routes>

        </BrowserRouter>

    </>
  )
}

export default App
