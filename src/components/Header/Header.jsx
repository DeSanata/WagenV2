import React, {useRef} from 'react';

import { Container, Row, Col, } from 'reactstrap';
import { Link, NavLink, } from 'react-router-dom';
import '../../styles/header.css';
import { useTranslation } from "react-i18next";



const navLinks = [
    {
        path:'/home',
        display: 'Home',
        display1: 'Accueil'
    },
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


const Header = () => {

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

    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return ( <header className="header">

    {/* header top */}
    <div className="header__top">
        <Container>
            <Row>
               <Col lg='6' md='6' sm='6'>
                <div className="header__top__left">
                    <span>{t('help')}</span>
                    <span className="header__top__help">
                    <i class="ri-phone-fill"></i> {t('helpnum')}
                    </span>
                </div>
               </Col> 

               <Col lg='6' md='6' sm='6'>
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                    <Link to='#'className='d-flex align-items-center gap-1'> 
                        <i class="ri-login-circle-line"></i> {t('log')} 
                    </Link>

                    <Link to='#'className='d-flex align-items-center gap-1'> 
                        <i class="ri-user-line"></i> {t('reg')} 
                    </Link>
                </div>
               </Col> 
            </Row>
        </Container>
    </div>

    {/* header middle */}
    <div className="header__middle">
        <Container>
            <Row>
                <Col lg='4' md='3' sm='4'>
                    <div className="logo">
                        <h1>
                            <Link to='/home'className='d-flex align-items-center gap-3'>
                                <i class="ri-car-line"></i>
                                <span>
                                    Wagen <br />{t('ac')}
                                </span>   
                            </Link>
                        </h1>
                    </div>
                </Col>

                <Col lg='3' md='3' sm='4'>
                    <div className="header__location d-flex align-items-center gap-2">
                        <span><i class="ri-earth-line"></i></span>
                        <div className="header__location-content">
                            <h4>{t('ca')}</h4>
                            <h6>{t('ad')}</h6>
                        </div>
                    </div>
                </Col>


                <Col lg='3' md='3' sm='4'>
                    <div className="header__location d-flex align-items-center gap-2">
                        <span><i class="ri-time-line"></i></span>
                        <div className="header__location-content">
                            <h4>{t('day')}</h4>
                            <h6>{t('hour')}</h6>
                        </div>
                    </div>
                </Col>

                <Col lg='2' md='3' sm='0'className=' d-flex align-items-center justify-content-end'>
                      <button className = 'header__btn' onClick={swapLanguage}>
                      {t('lang')}
                      </button>
                </Col>
            </Row>
        </Container>
    </div>


    {/* main navigation */}

    <div className="main__navbar">
        <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                <span className="mobile__menu">
                <i class="ri-menu-line" onClick={toggleMenu}></i>  
                </span>

                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <div className="menu">
                        {navLinks.map((item,index) => (
                            <NavLink 
                                to={item.path} 
                                className={(navClass) =>
                                    navClass.isActive ? 'nav__active nav__item' : 
                                    'nav__item'
                                } 
                                key={index}
                            >
                                {(i18n.language == 'en') ? item.display : item.display1}
                                
                            </NavLink>
                        
                            ) )}
                    </div>
                </div>

               
            </div> 
        </Container>
    </div>
  </header>
  );
};

export default Header;