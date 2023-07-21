import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedCarData = () => {
    switch (sortBy) {
      case "low":
        return carData.slice().sort((a, b) => a.price - b.price); 
      case "high":
        return carData.slice().sort((a, b) => b.price - a.price); 
      default:
        return carData; 
    }
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleSortChange} value={sortBy}>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCarData().map((item) => (
               <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
