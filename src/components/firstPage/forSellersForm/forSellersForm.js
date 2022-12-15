import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';

let demoSkills = ["SEO","Facebook Ads", "Instagram Marketing", "Google Ads", "Web Development", "React JS", "JavaScript",
                "Angular", "Node JS"]

let skillsToRender = demoSkills.map((item) => ({label:item, value:item}))

function SellerForm() {

    const selectOptions = (opt) => {
        console.log(opt);
    }

    return ( 
        <div className="commonFormContainer">
        <h3 className="text-center text-white">For Sellers</h3>
            <Form className="commonFormGroupClass">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Name</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Email address</strong></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Mobile Number</strong></Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSkills">
                    <Form.Label className="text-white"><strong>Please Select Your Skills</strong></Form.Label>
                    <Dropdown>
                        <Select
                            options={skillsToRender}
                            onChange={(opt) => selectOptions(opt)}
                            isMulti={true}
                        />
                    </Dropdown>
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

export default SellerForm;