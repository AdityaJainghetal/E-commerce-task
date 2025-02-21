import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { qntyIncrement, qntyDecrement, itemRemove } from "../productSlice";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

const MyCart = () => {
    const cartData = useSelector((state) => state.myproduct.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let totAmount = 0;

    const MyData = cartData.map((key) => {
        totAmount += key.price * key.qnty;
        return (
            <tr key={key.id}>
                
                <td> <img src={key.image} width="100" height="100" /></td>
               
                <td>{key.title}</td>
                
                <td>{key.cate}</td>
                <td>{key.price}</td>
                <td>
                    <FaMinusCircle onClick={() => { dispatch(qntyDecrement({ id: key.id })) }} />
                    {key.qnty}
                    <FaPlusCircle onClick={() => { dispatch(qntyIncrement({ id: key.id })) }} />
                </td>
                <td>{key.price * key.qnty}</td>
                <td>
                    <Button variant="danger" onClick={() => { dispatch(itemRemove(key.id)) }}>Remove</Button>
                </td>
            </tr>
        );
    });

    return (
        <div className="container">
            <h1 className="text-center my-4">Our Products</h1>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                      
                            <th>Category</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {MyData}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="5"></th>
                            <th>Net Amount:</th>
                            <th>{totAmount}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </Table>
            </div>
            <div className="text-center my-4">
                <Button variant="primary" onClick={() => { navigate("/checkout") }}>CheckOut</Button>
            </div>
        </div>
    );
}

export default MyCart;