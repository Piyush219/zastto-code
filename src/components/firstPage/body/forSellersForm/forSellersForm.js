import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';
// import styles from "./forSellersForm.module.css";


let demoSkills = [
    "SEO",
    "Content Wriitng",
    "Graphic Designing",
    "UI/UX",
    "Facebook Ads", 
    "Instagram Marketing", 
    "Google Ads", 
    "Web Development", 
    "React JS", 
    "JavaScript",
    "Angular", 
    "Node JS"
]

let skillsToRender = demoSkills.map((item) => ({label:item, value:item}))

const customSelectStyle = {
    control : (base, state) => ({
        ...base,
        overflow:"auto",
        position:"relative"
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor:"white",
        color:"black",
        fontFamily:"sans-serif",
        fontSize:"12px",
    }),
    menuList: base => ({
        ...base,
        overflow:"auto"
})
}

function SellerForm(props) {

    const selectOptions = (opt) => {
        console.log(opt);
    }

    return ( 
        <div className="commonFormContainer">
            <div className="text-center"><strong>Zastto Seller</strong></div>
            <div className='text-center'>Join Zastto as a freelancer and boost your career.</div>
            <Form className="">
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

                <Form.Group className="mb-3" controlId="formBasicSkills">
                    <Form.Label className="text-white"><strong>Please Select Your Skills:</strong></Form.Label>
                    <Dropdown>
                        <Select
                            options={skillsToRender}
                            onChange={(opt) => selectOptions(opt)}
                            isMulti={true}
                            styles={customSelectStyle}
                            menuPlacement="top"
                        />
                    </Dropdown>
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

export default SellerForm;