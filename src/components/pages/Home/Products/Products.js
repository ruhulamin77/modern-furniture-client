import React from "react";
import "./Product.css";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/furnitures")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <Container className="product-container">
      <h2 className="mt-5 uh" style={{ color: "#FF7004" }}>
        POPULAR FURNITURE
      </h2>
      <div className="underline mb-5"></div>
      <Row lg={2} md={2} sm={2} xs={1} className="g-4">
        {products.slice(0, 6).map((product) => (
          <SingleProduct key={product.key} product={product}></SingleProduct>
        ))}
      </Row>
      <div className="text-center m-5">
        <Link to="/all-products">
          <button className="btn btn-warning">VIEW OUR STORE</button>
        </Link>
      </div>
    </Container>
  );
};

export default Products;
