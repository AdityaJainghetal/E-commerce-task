// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBNavbarLink,
//   MDBIcon,
//   MDBCollapse,
// } from "mdb-react-ui-kit";

// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// const TopMenu = () => {
//   const [openNavSecond, setOpenNavSecond] = useState(false);
//   const product = useSelector((state) => state.myproduct.cart);
//   const proLength = product.length;
//   const navigate = useNavigate();
//   console.log(product);

//   const gotoCartPage = () => {
//     navigate("/mycart");
//   };
//   return (
//     <>
//       <MDBNavbar expand="lg" light bgColor="light">
//         <MDBContainer fluid>
//           <MDBNavbarBrand href="/">E-commece</MDBNavbarBrand>
//           <MDBNavbarToggler
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setOpenNavSecond(!openNavSecond)}
//           >
//             <MDBIcon icon="bars" fas />
//           </MDBNavbarToggler>
//           <MDBCollapse navbar open={openNavSecond}>
//             <MDBNavbarNav
//                 as={Link} to="/mens">
//                 Mens Collections
              
//               <MDBNavbarLink>
//                 <span id="procounter"> {proLength} </span>

//                 <a href="" onClick={gotoCartPage}>
//                   <FaShoppingCart style={{ marginRight: "20px" }} />
//                 </a>
//               </MDBNavbarLink>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </>
//   );
// };

// export default TopMenu;











import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,

  Badge,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

const Topmenu = () => {

    const product = useSelector((state) => state.myproduct.cart);
    const proLength = product.length;
    console.log(product);
  const navigate = useNavigate();



  return (
    <>
      <Navbar expand="lg" className="custom-navbar" id="navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Dress Collection
          </Navbar.Brand>
          <Navbar.Toggle >
          <IoMdMenu />
          </Navbar.Toggle>
        
          
           
          
          <Navbar.Collapse id="navbar-nav">
            <Row className="w-100 align-items-center">
              {/* Left Section */}
              <Col xs={12} md={4} className="text-center text-md-start">
                <Nav className="nav-links">
                  <Nav.Link as={Link} to="/home">
                    All Products
                  </Nav.Link>
                 

                  <Nav.Link as={Link} to="/jewelery">
                  Jewelery
                  </Nav.Link>
                  <Nav.Link as={Link} to="/electronic" className="login-link">
                  Electronic
                  </Nav.Link>
                </Nav>
              </Col>

              {/* Center Section */}
             
              {/* Right Section */}
              <Col
                xs={12}
                md={4}
                className="text-center text-md-end d-flex justify-content-center justify-content-md-end align-items-center"
              >
                <Nav.Link as={Link} to="/mycart" className="cart-icon">
                  <FaCartShopping />
                  {proLength > 0 && (
                    <Badge bg="danger">{proLength}</Badge>
                  )}
                </Nav.Link>
                
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topmenu;