import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./contactUsPage.module.css";

import axios from 'axios';

function ContactUs() {

    const [contactFormValues, setContactFormValues] = useState();
    const [mobileValidation, setMobileValidation] = useState(false);

    const onContactFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContactFormValues({ ...contactFormValues, [name]: value });
    }

    const mobileNumberValidation = (event) => {
        (!/[0-9]/.test(event.key) || event.target.value.length>10) && event.preventDefault();
    }

    const contactSubmitHandler = (event) => {
        event.preventDefault();
        if(contactFormValues?.contact_mobile && contactFormValues?.contact_mobile.length < 10){
            setMobileValidation(true)
        } else {
            setMobileValidation(false)
            let contactPayload = contactFormValues;
            const response=axios.post('http://localhost:5000/contactus', contactPayload);
            console.log("Paylaod>>",contactPayload)
            console.log("response>>",response)
            event.target.reset();
        }
    }

    return ( 
        <div className={styles.contatcUsContainer}>
            <h4><strong>To Connect with us drop your details below:</strong></h4>
            <Form className="mt-4" onSubmit={contactSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Name:</strong></Form.Label>
                    <Form.Control type="text" name="contact_name" required onChange={onContactFormChange} placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Email address:</strong></Form.Label>
                    <Form.Control type="email" name="contact_email" required onChange={onContactFormChange} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Mobile Number:</strong></Form.Label>
                    <Form.Control type="number" name="contact_mobile" required onChange={onContactFormChange} placeholder="Enter Mobile" onKeyPress={mobileNumberValidation}/>
                    {mobileValidation && <span className="commonErrorShowClass">Please enter 10 digit mobile number</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextArea">
                    <Form.Label className="text-white"><strong>Please Tell Us Your Query:</strong></Form.Label>
                    <Form.Control as="textarea" name="contact_queryDiscription" rows={3} required onChange={onContactFormChange} placeholder="Write here" />
                </Form.Group>

                <div className="commonFormButtonClass">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
     );
}

export default ContactUs;