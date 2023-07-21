import React from 'react';
import Slider from 'react-slick';
import '../../styles/testimonial.css';

import ava01 from '../../assets/all-images/ava-1.jpg';
import ava02 from '../../assets/all-images/ava-2.jpg';
import ava03 from '../../assets/all-images/ava-3.jpg';
import ava04 from '../../assets/all-images/ava-4.jpg';


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 9000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <Slider {...settings}>
        <div className='testimonial py-4 px-3'>
            <p className='section__description'>
            Wagen truly delivered on their promise 
            of a safe and convenient ride. The car 
            I rented was in excellent condition, and 
            the overall service was top-notch. The staff
             was helpful and accommodating, ensuring that
              my journey was comfortable and worry-free. 
              I wouldn't hesitate to recommend Wagen to 
              anyone in need of a trustworthy car rental service.
            </p>

            <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava01} alt='' className='w-25 h-25 rounded-2'/>

                <div>
                    <h6 className='mb-0 mt-3'>Mark Peter</h6>
                    <p className='section__description'>Customer</p>
                </div>
            </div>
        </div>

        <div className='testimonial py-4 px-3'>
            <p className='section__description'>
            I had an excellent experience with Wagen! 
            The car was in pristine condition, and the
             customer service was exceptional. The process 
             was smooth from start to finish, and I felt safe 
             and comfortable throughout my journey. I highly 
             recommend Wagen for anyone in need of a reliable
              and trustworthy car rental service.
            </p>

            <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava02} alt='' className='w-25 h-25 rounded-2'/>

                <div>
                    <h6 className='mb-0 mt-3'>Emily Watson</h6>
                    <p className='section__description'>Customer</p>
                </div>
            </div>
        </div>

        <div className='testimonial py-4 px-3'>
            <p className='section__description'>
            Wagen exceeded my expectations! The staff
             was friendly and professional, and the car 
             I rented was perfect for my family trip. It
              was clean, spacious, and equipped with all 
              the necessary features. We felt secure knowing 
              that Wagen prioritizes safety. I will definitely 
              choose Wagen for my future car rental needs.
            </p>

            <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava03} alt='' className='w-25 h-25 rounded-2'/>

                <div>
                    <h6 className='mb-0 mt-3'>Joseph White</h6>
                    <p className='section__description'>Customer</p>
                </div>
            </div>
        </div>

        <div className='testimonial py-4 px-3'>
            <p className='section__description'>
            I'm incredibly impressed with Wagen's commitment 
            to customer satisfaction. The booking process was 
            effortless, and the car I rented was delivered promptly. 
            The entire experience was seamless, and the vehicle performed 
            flawlessly throughout my trip. I appreciate Wagen's dedication
             to providing a reliable and enjoyable ride.
            </p>

            <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava04} alt='' className='w-25 h-25 rounded-2'/>

                <div>
                    <h6 className='mb-0 mt-3'>Lina Voit</h6>
                    <p className='section__description'>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonial