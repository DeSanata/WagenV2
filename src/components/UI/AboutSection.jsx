

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import '../../styles/about-section.css';
import aboutImg from '../../assets/all-images/cars-img/AdobeStock_501474689_Preview_Editorial_Use_Onlyabout.jpeg';

const AboutSection = (aboutClass) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >


        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='about__section-content'>
                        <h4 className='section__subtitle'>About Us</h4>
                        <h2 className='section__title'>Welcome to Wagen,</h2>
                        <p className='section__description'>
                        your premier destination for hassle-free car rentals.
                         At Wagen, we believe that renting a car should be a 
                         seamless and enjoyable experience. Whether you're a 
                         frequent traveler or simply in need of a temporary 
                         set of wheels, our mission is to provide you with
                          top-quality vehicles and exceptional customer service.
                           With our extensive fleet of well-maintained cars, 
                           you can choose the perfect vehicle to suit your needs, 
                           from compact cars for city exploration to spacious SUVs 
                           for family adventures. We pride ourselves on delivering
                            reliability, convenience, and competitive prices. Experience 
                            the freedom of the open road with Wagen!
                        </p>
                    

                    
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className='about__img'>
                        <img src={aboutImg} alt='' className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
};

export default AboutSection