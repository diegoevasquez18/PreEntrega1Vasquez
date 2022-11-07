import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./inicio.css";

const Inicio = () => {
  return (
    <div>
      <div>
        <Carousel className="containerCarousel" variant="dark">
          <Carousel.Item className="container-carousel">
            <Link to={`/category/set`}>
            <img
              className="imgC"
              src="https://rougeb2car.vtexassets.com/assets/vtex.file-manager-graphql/images/45bd30c1-12dd-4809-a0ea-a2d81014f7b0___147a2e350f4a7306aa865810edddf521.jpg"
              alt="First slide"
            />
            </Link>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="container-carousel">
            <img
              className="imgC"
              src="https://rougeb2car.vtexassets.com/assets/vtex.file-manager-graphql/images/0148c631-cb04-4601-8158-390513fe94bb___eeb63baf7af393db7b99bbee9564ea14.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="container-carousel">
            <img
              className="imgC"
              src="https://rougeb2car.vtexassets.com/assets/vtex.file-manager-graphql/images/4335c4e2-3eee-4433-9ecf-62bbd5dd2672___bb6b2a8fd9276de692e64f3ad9582051.png"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default Inicio;
