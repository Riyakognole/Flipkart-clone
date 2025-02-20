import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Container, Button, Image } from "react-bootstrap";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <Container className="text-center mt-4">
      <h2>{product.name}</h2>
      <Image src={product.image} height="300px" />
      <p>Price: ₹{product.price}</p>
      <Button variant="success" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </Container>
  );
};

export default ProductDetails;
