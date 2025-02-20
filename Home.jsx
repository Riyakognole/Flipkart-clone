import React from "react";
import products from "../data/products";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <h2 className="text-center my-4">Products</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Card className="m-3 p-2 shadow">
                            <Card.Img
                                variant="top"
                                src={product.image}
                                height="200px"
                                alt={product.name}
                            />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>₹{product.price}</Card.Text>
                                <Link to={`/product/${product.id}`}>
                                    <Button variant="primary">View Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
