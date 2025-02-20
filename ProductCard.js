import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="m-3 p-2 shadow">
      <Card.Img variant="top" src={product.image} alt={product.name} height="200px" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>₹{product.price}</Card.Text>
        <Link to={`/product/${product.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
