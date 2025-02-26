import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../productSlice';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData =async () => {
    let api = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(api);
      const data = await response.json();
      setMydata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <Col xs={12} sm={6} md={4} lg={3} key={key.id} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '100%', textAlign: "center" }}>
          <Card.Img variant="top" style={{ cursor: 'pointer' }}
            src={key.image} height="250" />
          <Card.Body>
            <Card.Title >{key.title}</Card.Title>
            <Card.Text>
              <h4 style={{ color: 'red' }}>Price: {key.price}</h4>
              <h5>Product for: {key.category}</h5>
            </Card.Text>
            <Button variant="primary"
              onClick={() => {
                dispatch(addToCart({ id: key.id, title: key.title, desc: key.description, cate: key.category, price: key.price, image: key.image, qnty: 1 }));
              }}>
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={b1} width="100%" height="500" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={b2} width="100%" height="500" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={b3} width="100%" height="500" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <h1 style={{ color: 'rgb(53, 149, 245)' }}>Our Premium Products</h1>
      <Container>
        <Row>
          {ans}
        </Row>
      </Container>
    </>
  );
}

export default Home;