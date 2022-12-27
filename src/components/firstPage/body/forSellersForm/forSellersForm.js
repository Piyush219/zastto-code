import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';
import { useEffect, useState } from 'react';
// import styles from "./forSellersForm.module.css";

import axios from 'axios';


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

    const [options] = useState(skillsToRender);
    const [formValues, setFormValues] = useState();
    // const [skillValues, setSkillValues] = useState([]);
    const [mobileValidation, setMobileValidation] = useState(false);
    const [enterSkillCheck, setEnteredSkillCheck] = useState(false);
    const [selected, setSelected] = useState([]);

    const onSellerFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({ ...formValues, [name]: value });
    }

    const mobileNumberValidation = (event) => {
        (!/[0-9]/.test(event.key) || event.target.value.length>=10) && event.preventDefault()
    }

    // useEffect(()=>{
    //     console.log("Skill Values",skillValues)
    // },[skillValues])

    

    // const selectOptions = (opt) => {
    //     let newArr = [];

    //     if(opt && opt.length){
    //         opt.forEach(item => newArr.push(item.value));
    //         setSkillValues([ ...newArr])
            
    //     } else {
    //         newArr = []
    //         setFormValues(newArr)
    //     }
    // }

    const sellerSubmitHandler = (event) => {
        event.preventDefault()
        if(formValues?.seller_mobile && formValues?.seller_mobile.length < 10){
            setMobileValidation(true)
        } else {
            setMobileValidation(false)
            if(!selected.length){
                setEnteredSkillCheck(true)
            }
             else {
                setEnteredSkillCheck(false)
                 let payload =  {
                     ...formValues, seller_skills: selected.map(item => item.value)
                 };
                 const response=axios.post('http://localhost:5000/sellers', payload);
                 console.log("payload>>",payload)
                 console.log("response>>",response)
                 event.target.reset();
                 setSelected([])
             }
        }
        
    }

    return ( 
        <div className="commonFormContainer">
            <div className="text-center"><strong>Zastto Seller</strong></div>
            <div className='text-center'>Join Zastto as a freelancer and boost your career.</div>
            <Form className="" onSubmit={sellerSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Name:</strong></Form.Label>
                    <Form.Control type="text" name="seller_name" onChange={onSellerFormChange} placeholder="Enter Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Email address:</strong></Form.Label>
                    <Form.Control type="email" name="seller_email" onChange={onSellerFormChange} placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white"><strong>Mobile Number:</strong></Form.Label>
                    <Form.Control type="number" name="seller_mobile" onChange={onSellerFormChange} onKeyPress={mobileNumberValidation} placeholder="Enter Mobile" required/>
                    {mobileValidation && <span className="commonErrorShowClass">Please enter 10 digit mobile number</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSkills">
                    <Form.Label className="text-white"><strong>Please Select Your Skills:</strong></Form.Label>
                    <Dropdown>
                        <Select
                            options={options}
                            onChange={setSelected}
                            isMulti={true}
                            styles={customSelectStyle}
                            menuPlacement="top"
                            required
                            value={selected}
                        />
                    </Dropdown>
                    {enterSkillCheck && <span className="commonErrorShowClass">Please select atleast one skill.</span>}
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