import React,  { useState,useRef } from "react";
import "../../styles/booking-form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Tooltip,Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const BookingForm = () => {

  const [emailTooltipOpen, setEmailTooltipOpen] = useState(false);
  const [phoneExample] = useState("");
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const formikRef = useRef(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    pickupLocation: "",
    dropoffLocation: "",
    journeyDate: "",
    journeyTime: "",
    dropoffDate: "",
    dropoffTime: "",
    message: ""
  };
  Yup.setLocale({
    string: {
      email: "Invalid email format (e.g., yourname@example.com)",
    },
  });
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email()
      .required("Please enter your email address"),
    phoneNumber: Yup.string()
    .matches(
    /^[0-9]{10}$/,
    "Invalid phone number format (e.g., 1234567890)"
    )
    .required("Please enter your phone number"),
    pickupLocation: Yup.string().required("Please enter the pick-up Location"),
    dropoffLocation: Yup.string().required("Please enter the drop-off Location"),
    journeyDate: Yup.date().required("Please enter the pick-up date"),
    journeyTime: Yup.string().required("Please enter the pick-up time"),
    dropoffDate: Yup.date().required("Please enter the drop-off date"),
    dropoffTime: Yup.string().required("Please enter the drop-off time"),
    
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setModalOpen(true);
      setSubmitting(false);
      formikRef.current.resetForm(); 
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      innerRef={formikRef}
      >
      <Form>
        <div className="booking__form d-inline-block me-4 mb-4">
          <Field type="text" name="firstName" placeholder="First Name" />
          <ErrorMessage name="firstName" component="div" className="error-message" />
        </div>
        <div className="booking__form d-inline-block ms-1 mb-4">
          <Field type="text" name="lastName" placeholder="Last Name" />
          <ErrorMessage name="lastName" component="div" className="error-message" />
        </div>

        <div className="booking__form d-inline-block me-4 mb-4">
          <Field type="email" name="email" placeholder="Email" />
            <Tooltip
              target="emailTooltip"
              isOpen={emailTooltipOpen}
              toggle={() => setEmailTooltipOpen(!emailTooltipOpen)}
              >
              Invalid email format
              </Tooltip>
              <i id="emailTooltip" className="fa fa-info-circle tooltip-icon" />
              <ErrorMessage name="email" component="div" className="error-message" />
        </div>
        <div className="booking__form d-inline-block ms-1 mb-4">
          <Field
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          onFocus={() => setShowPhoneTooltip(true)}
          onBlur={() => setShowPhoneTooltip(false)}
          />
          {showPhoneTooltip && (
          <div className="tooltip">
          <span className="tooltip-text">
          {phoneExample !== "" ? phoneExample : "Invalid phone number format"}
          </span>
          </div>
          )}
          <ErrorMessage name="phoneNumber" component="div" className="error-message" />
        </div>

        <div className="booking__form d-inline-block me-4 mb-4">
          <Field type="text" name="pickupLocation" placeholder="Pick-up Location" />
          <ErrorMessage name="pickupLocation" component="div" className="error-message" />
        </div>
        <div className="booking__form d-inline-block ms-1 mb-4">
          <Field type="text" name="dropoffLocation" placeholder="Drop-off Location" />
          <ErrorMessage name="dropoffLocation" component="div" className="error-message" />
        </div>

        <div className="booking__form d-inline-block me-4 mb-4">
          <Field type="date" name="journeyDate" placeholder="Pick-up Date" />
          <ErrorMessage name="journeyDate" component="div" className="error-message" />
        </div>
        <div className="booking__form d-inline-block ms-1 mb-4">
          <Field type="date" name="dropoffDate" placeholder="Drop-off Date" />
          <ErrorMessage name="dropoffDate" component="div" className="error-message" />
        </div>

        <div className="booking__form d-inline-block me-4 mb-4">
          <Field type="time" name="journeyTime" placeholder="Pick-up Time" className="time__picker" />
          <ErrorMessage name="journeyTime" component="div" className="error-message" />
        </div>
        <div className="booking__form d-inline-block me-1 mb-4">
          <Field type="time" name="dropoffTime" placeholder="Drop-off Time" className="time__picker" />
          <ErrorMessage name="dropoffTime" component="div" className="error-message" />
        </div>

        <div>
          <Field as="textarea" rows={5} type="textarea" name="message" className="textarea" placeholder="Write" />
          
        </div>
        <div className="form__group">
          <button className="btn Bookink-btn" type="submit">Reserve</button>
        </div>
        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Reservation Confirmed</ModalHeader>
          <ModalBody>
    
          <p>Your reservation has been successfully made.</p>
          </ModalBody>
          <ModalFooter>
            <Button className="custom-button" onClick={() => setModalOpen(false)}>
            Close
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </Formik>
    
  );
};

export default BookingForm;
