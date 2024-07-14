import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {  UserContextProvider } from './Context/userContext'
import NoMatch from './Components/NoMatch'
import Home from './Components/Home'
import Login from './Components/login'
import Header from './Components/Header'
import ProductDetailView from './Components/Products/ProductDetailView'
import Register from './Components/register'
import { AddDefaultProducts } from './Components/Products/AddDefaultProducts'
function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' index={true} element={<Home />} />
          <Route path='/products'  element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products/:productId' element={<ProductDetailView />} />
          {/* <Route path='/add/products' element={<AddDefaultProducts />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
