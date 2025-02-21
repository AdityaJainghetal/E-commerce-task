import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import CheckOut from "./pages/CheckOut";
import Jewelery from "./pages/jewelery";
import Electronic from "./pages/Electronic";




const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
       
            <Route path="jewelery" element={<Jewelery/>} />
            <Route path="Electronic" element={<Electronic/>}/>
         <Route path="mycart" element={<MyCart/>}/>
           
            

            <Route path="mycart" element={<MyCart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;