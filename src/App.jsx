import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import CheckOut from "./pages/CheckOut";
import MenCollections from "./pages/MenCollections";
import ShowProduct from "./pages/ShowProduct";


const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="mens" element={<MenCollections/>}/>
         <Route path="mycart" element={<MyCart/>}/>
            <Route path="showproduct/:myid" element={<ShowProduct/>} />
            

            <Route path="mycart" element={<MyCart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;