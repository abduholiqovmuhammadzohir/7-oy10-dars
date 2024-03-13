import {Routes , Route} from "react-router-dom"
import './App.css'
import Header from "./components/Header"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Produts from "./pages/Produts"

function App() {

  return (
    <>

    <Header></Header>

      <Routes>
        <Route path="/" element={<Produts></Produts>}></Route>
        <Route path="/about/:id" element={<About></About>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </>
  )
}

export default App
