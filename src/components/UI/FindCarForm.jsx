import React, {useState} from 'react';
import '../../styles/find-car-form.css';
import {Form, FormGroup} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const FindCarForm = () => {

    
    const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffDate, setdropoffDate] = useState('');
  const [dropoffTime, setdropoffTime] = useState('');

  const handleFindCar = () => {
    if (pickupLocation && dropoffLocation && pickupDate && pickupTime) {
      navigate('/cars'); 
    } 
  };
  return (
    <Form className='form'>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
            <FormGroup className='form__group'>
            <input
            type='text'
            placeholder='Pick-up Location'
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            />
            </FormGroup>


            <FormGroup className='form__group'>
            <input
            type='date'
            placeholder='Pick-up Date'
            required
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            />

            </FormGroup>

            <FormGroup className='form__group'>
            <input
            className='Pick-up Time'
            type='time'
            placeholder='Pick-up Time'
            required
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            />
            </FormGroup>
            
            <FormGroup className='form__group'>
            <input
            type='text'
            placeholder='Drop-off Location'
            required
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            />
            </FormGroup>

            <FormGroup className='form__group'>
            <input
            type='date'
            placeholder='Drop-off Date'
            required
            value={dropoffDate}
            onChange={(e) => setdropoffDate(e.target.value)}
            />

            </FormGroup>

            <FormGroup className='form__group'>
            <input
            className='Drop-off Time'
            type='time'
            placeholder='Drop-off Time'
            required
            value={dropoffTime}
            onChange={(e) => setdropoffTime(e.target.value)}
            />
            </FormGroup>

            <FormGroup className='form__group'>
                <button className='btn find__car-btn' onClick={handleFindCar}>
                Find Car</button>
            </FormGroup>
        </div>
    </Form>
  )
};

export default FindCarForm;