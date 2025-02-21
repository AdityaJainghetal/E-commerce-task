import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,

  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const TopMenu=()=>{
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const product= useSelector((state)=>state.myproduct.cart);
  const proLength= product.length;
  const navigate= useNavigate();
 console.log(product);

 const gotoCartPage=()=>{
  navigate("/mycart");
 }
    return(
        <>
         
 
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
            
       
            <MDBNavbarLink as={Link} to="/mens">Men Collections</MDBNavbarLink>
            <MDBNavbarLink> 

<span id="procounter"> {proLength} </span>

<a href="" onClick={gotoCartPage}>
<FaShoppingCart style={{marginRight:"20px"}} /></a>
</MDBNavbarLink>
           


        
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

        </>
    )
}

export default TopMenu;