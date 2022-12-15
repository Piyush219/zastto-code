import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './businessForm.module.css'

function BusinessForm () {
    return ( 

        <div className="commonFormContainer">
        <h3 className="text-center text-white">For Businesses</h3>
            <Form className="commonFormGroupClass">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="text-white"><strong>Name</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Email address</strong></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Label className="text-white"><strong>Mobile Number</strong></Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicProject">
                    <Form.Label className="text-white"><strong>Project Description or What Skills/Talent are you looking for</strong></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="write here" />
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