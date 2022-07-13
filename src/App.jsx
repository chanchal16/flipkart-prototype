import './App.css'
import { Navbar } from './components/Navbar'
import { Products } from './pages/Products';
import {Route,Routes} from 'react-router-dom'
import { Cart } from './pages/Cart';

function App() {

  return (
    <div className="App">
     <Navbar/>
     <main>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      
     </main>
    </div>
  )
}

export default App
