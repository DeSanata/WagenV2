import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useTranslation } from 'react-i18next';
import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const { t } = useTranslation();
  return (
    
    <Helmet title="Contact">
    
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h5 className="fw-bold mb-4">{t('ex1')}</h5>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder={t('placeholderName')} type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder={t('placeholderEmail')} type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder={t('placeholderMessage')}
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  {t('send')}
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info ">
                <h5 className="fw-bold mb-4">{t('information')}</h5>
                <p className="section__description mb-0">
                  {t('address')}
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">{t('phone')}</h6>
                  <p className="section__description mb-0"> {t('num')}</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">{t('email')}</h6>
                  <p className="section__description mb-0">{t('em')}</p>
                </div>

                <h6 className="fw-bold mt-4">{t('follow')}</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
