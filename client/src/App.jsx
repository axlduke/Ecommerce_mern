import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
// import Home from "./components/HomePage/Home"
import ItemView from "./components/Store/ItemView"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ItemView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
