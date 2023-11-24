import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css'
import HomaPage from './Pages/HomaPage'
import RegisterPage from './Pages/RegisterPage'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomaPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
      {/* <HomaPage/> */}
    </>
  )
}

export default App
