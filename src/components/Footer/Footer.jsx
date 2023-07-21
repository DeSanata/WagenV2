import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from 'react-router-dom';
import '../../styles/footer.css';
import { useTranslation } from "react-i18next";

const quickLinks =[
  {
    path:'/about',
    display: 'About',
    display1: 'A propos'
},
{
    path:'/cars',
    display: 'Cars',
    display1: 'Voitures'
},
{
    path:'/blogs',
    display: 'Blog',
    display1: 'Blog'
},
{
    path:'/contact',
    display: 'Contact',
    display1: 'Contact'
},

];

const Footer = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const swapLanguage = () => {
    if (i18n.language === 'en') {
      changeLanguage('fr');
    } else {
      changeLanguage('en');
    }
  };


  const date = new Date()
  const year = date.getFullYear()
  return (
   <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
          <div className="logo footer__logo">
              <h1>
                  <Link to='/home'className='d-flex align-items-center gap-3'>
                    <i class="ri-car-line"></i>
                      <span>
                        Wagen <br />{t('ac')}
                      </span>   
                  </Link>
                </h1>
          </div>
          <p className="footer__logo-content">
            {t('sen')}
          </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className="footer__link-title">{t('link')}</h5>
            <ListGroup>
              {
                quickLinks.map((item, index) =>(
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>
                    {(i18n.language == 'en') ? item.display : item.display1}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>
        
        <Col lg='3' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className="footer__link-title mb-4">{t('off')}</h5>
            <p className='office__info'>223 Navan, Page, Canada</p>
            <p className='office__info'>{t('offphone')}</p>
            <p className='office__info'>Email: wagen203@gmail.com</p>
            <p className='office__info'>{t('offtime')}</p>
          </div>
        </Col>
        
        <Col lg='3' md='4' sm='12'>
          <div className='mb-4'>
            <h5 className="footer__link-title">{t('new')}</h5>
            <p className='section__description'>{t('subs')}</p>
            <div className='newsletter'>
              <input type='email' placeholder='Email'/>
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </div>
        </Col>
       
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;