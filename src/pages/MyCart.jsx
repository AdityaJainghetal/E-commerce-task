import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import {qntyIncrement, qntyDecrement, itemRemove} from "../productSlice";
import { useNavigate } from "react-router-dom";

const MyCart=()=>{
    const cartData= useSelector((state)=>state.myproduct.cart);
    const dispatch= useDispatch();
    const navigate=useNavigate();

    let totAmount=0;

    const MyData=cartData.map((key)=>{

      totAmount+=key.price*key.qnty;
        return(
            <>
              <tr>
                <td> <img src={key.image} width="100" height="100" /></td>
                <td>{key.title}</td>
                <td>{key.cate}</td>
                <td>{key.price}</td>
                <td> 
                  
                <FaMinusCircle onClick={()=>{dispatch(qntyDecrement({id:key.id}))}} />



                  {key.qnty} 
                  <FaPlusCircle onClick={()=>{dispatch(qntyIncrement({id:key.id}))}} />
                  
                  
                  </td>
                <td> {key.price * key.qnty} </td>
                <td> 

                  <button onClick={()=>{dispatch(itemRemove(key.id))}}> Remove</button>
                </td>
              </tr>
            </>
        )
    })
    return(
        <>
        <div style={{width:"100%"}}>
          <h1> Our Products </h1>   

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Decription</th>
          <th>Category</th>
          <th> Price </th>
          <th> QTY </th>
          <th> Total </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
          {MyData}
        </tbody>
        <tr>
          <th>#</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th> Net Amount :  </th>
          <th> { totAmount} </th>
          <th></th>
        </tr>


       
        </Table>     


     <center>

     <button onClick={()=>{navigate("/checkout")}}>CheckOut</button>
     </center>
     </div>
        </>
    )
}
export default MyCart;