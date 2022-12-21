import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function BusinessForm (props) {

    const [businessFormValues, setBusinessFormValues] = useState();

    const onBusinessFormChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setBusinessFormValues({ ...businessFormValues, [name]: value });
    }

    const mobileNumberValidation = (event) => {
        (!/[0-9]/.test(event.key) || event.target.value.length>10) && event.preventDefault()
    }

    const businessSubmitHandler = (event) => {
        event.preventDefault();
        let businessPayload = businessFormValues;
        console.log("Paylaod>>",businessPayload)
    }

    return ( 

        <div className="commonFormContainer">
                    <div className="text-center"><strong>Zastto Business</strong></div>
                    <div className='text-center'>Looking to hire a freelancer?</div>
                    <Form className="" onSubmit={businessSubmitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="text-white"><strong>Name:</strong></Form.Label>
                                <Form.Control type="text" name="business_name" placeholder="Enter Name" onChange={onBusinessFormChange} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-white"><strong>Email address:</strong></Form.Label>
                                <Form.Control type="email" name="business_email" placeholder="Enter email" onChange={onBusinessFormChange} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicMobile">
                                <Form.Label className="text-white"><strong>Mobile Number:</strong></Form.Label>
                                <Form.Control type="number" name="business_mobile" placeholder="Enter Mobile" onChange={onBusinessFormChange} onKeyPress={mobileNumberValidation} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicProject">
                                <Form.Label className="text-white"><strong>Project Description or Skills/Talent you are looking for:</strong></Form.Label>
                                <Form.Control type="text" name="business_project" rows={1} placeholder="Write here" onChange={onBusinessFormChange} required/>
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

export default BusinessForm;