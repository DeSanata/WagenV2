import React from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/AboutSection';
import { Container, Row, Col } from 'reactstrap';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';

import driveImg from '../assets/all-images/AdobeStock_217569021_Preview.jpeg';
import OurMembers from '../components/UI/OurMembers';
import '../styles/about.css';

const About = () => {
  return (
    <Helmet title='About'>
      <CommonSection title='About Us'/>
      <AboutSection aboutClass='aboutPage'/>
      <section className='about__page-section'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12'>
              <div className='about__page-img'>
                <img src={driveImg} alt='' className='w-100' rounded-3/>
              </div>
            </Col>

            <Col lg='6' md='6' sm='12'>
              <div className='about__page-content'>
                <h2 className='section__title'>We are Committed to Provide Safe Ride Solutions </h2>

                <p className='section__description'>
                At Wagen, safety is our top priority. 
                We are committed to providing you with 
                safe and reliable ride solutions for your
                 peace of mind. Our vehicles undergo rigorous 
                 inspections and regular maintenance to ensure 
                 they meet the highest safety standards
                </p>

                <p className='section__description'>
                We also employ advanced safety technologies,
                 such as GPS tracking and emergency response 
                 systems, to further enhance your protection. 
                 Whether you're traveling alone or with loved 
                 ones, you can trust Wagen to deliver a safe
                  and secure ride every time.
                </p>

                <div className='d-flex align-items-center gap-3 mt-4'>
                  <span className='fs-4'><i class="ri-phone-line"></i></span>
                  <div>
                    <h6 className='section__subtitle'>Need Any Help?</h6>
                    <h4>+1 304-244-0607</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection/>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className='section__subtitle'>Experts</h6>
              <h2 className='section__title'>Our Members</h2>
            </Col>
            <OurMembers/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;