import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./contactUsPage.module.css";

function ContactUs() {
    return ( 
        <div className={styles.contatcUsContainer}>
            <h4><strong>To Connect with us drop your details below:</strong></h4>
            <Form className="mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Name:</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Email address:</strong></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Mobile Number:</strong></Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextArea">
                    <Form.Label className="text-white"><strong>Please Tell Us Yoru Query:</strong></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Write here" />
                </Form.Group>

                <div className="commonFormButtonClass">
                    <Button variant="primary" type="button">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
     );
}

export default ContactUs;