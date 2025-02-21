import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';


import { useDispatch } from 'react-redux';
import { addToCart } from '../productSlice';


const ShowProduct=()=>{
const [mydata, setMydata]= useState([]);
const dispatch= useDispatch();
const {id} = useParams();

const loadData=async()=>{
  let api=`https://fakestoreapi.com/products=${id}`;
  try {
    const response = await fetch(api);
    const data = await response.json()
    setMydata(data)
  } catch (error) {
   console.log(error) 
  }
}
useEffect(()=>{
  loadData();
}, []);

const ans= mydata.map((key)=>{
  return(
    <>


      <table align="center">
         <tr>
            <td> 

                  <img src={key.image} width="500" height="400" />
            </td>
            <td>
            <h1> {key.title}</h1>
      
          <h5> Product for : {key.category}</h5>
          <h4 style={{color:'red'}}> Price :  {key.price} </h4>
                
          <Button variant="primary"
         onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, desc:key.description, cate:key.category, price:key.price, image:key.image, qnty:1 }))}}>
          Add To Cart</Button>
         </td>
         </tr>
      </table>
    </>
  )
})


  return(
        <>
       
     <h1 style={{color:'rgb(53, 149, 245)'}}> Product Details </h1>
       <div id="productData">
       {ans}
       </div>
        </>
    )
}

export default ShowProduct;