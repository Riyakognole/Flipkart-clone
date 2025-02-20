import React from "react";
import { Container, Button, Table } from "react-bootstrap";

const Cart = ({ cart, removeFromCart }) => {
    return (
        <Container className="mt-4">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>₹{item.price}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default Cart;
