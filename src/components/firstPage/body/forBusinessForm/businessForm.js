import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BusinessForm (props) {

    return ( 

        <div className="commonFormContainer">
                    <div className="text-center"><strong>Zastto Business</strong></div>
                    <div className='text-center'>Looking to hire a freelancer?</div>
                    <Form className="">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="text-white"><strong>Name:</strong></Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-white"><strong>Email address:</strong></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicMobile">
                                <Form.Label className="text-white"><strong>Mobile Number:</strong></Form.Label>
                                <Form.Control type="number" placeholder="Enter Mobile" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicProject">
                                <Form.Label className="text-white"><strong>Project Description or Skills/Talent you are looking for:</strong></Form.Label>
                                <Form.Control type="text" rows={1} placeholder="Write here" />
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

export default BusinessForm;