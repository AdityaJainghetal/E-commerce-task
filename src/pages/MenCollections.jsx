import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../productSlice';
import { Container, Row, Col } from 'react-bootstrap';

const MenCollections = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = async () => {
    let api = "https://fakestoreapi.com/products/category/men"; 
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
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={key.image} height="250" />
          <Card.Body>
            <Card.Title>{key.title}</Card.Title>
            <Card.Text>
              {key.description}
              <h5>Product for: {key.category}</h5>
              <h4 style={{ color: 'red' }}>Price: {key.price}</h4>
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
      <h1 style={{ color: 'rgb(53, 149, 245)' }}>Men Collections</h1>
      <Container>
        <Row>
          {ans}
        </Row>
      </Container>
    </>
  );
}

export default MenCollections;