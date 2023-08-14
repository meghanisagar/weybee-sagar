import { useEffect } from 'react';
import { Form,Button } from 'react-bootstrap';

const formDetails = [
    {
        id: "name",
        label: "Full name",
        placeholder: "Enter full name",
        type: "text",
        validationType: "string",
        validations: [
            {
                type: "required",
                params: ["name is required"],
            },
            {
                type: "min",
                params: [5, "name cannot be less than 5 characters"],
            },
            {
                type: "max",
                params: [10, "name cannot be more than 10 characters"],
            },
        ],
    },
    {
        id: "mobileno",
        label: "Mobile Number",
        placeholder: "Enter Mobile Number",
        type: "number",
        validationType: "number",
        validations: [
            {
                type: "required",
                params: ["mobile no. is required"],
            },
            {
                type: "min",
                params: [10, "name cannot be less than 10 characters"],
            },
            {
                type: "max",
                params: [10, "name cannot be more than 10 characters"],
            },
        ],
    },
    {
        id: "email",
        label: "Email",
        placeholder: "Enter Email",
        type: "text",
        validationType: "email",
        validations: [
            {
                type: "required",
                params: ["email is required"],
            },
            {
                type: "isValid",
                params: ["email is inValid"],
            }
        ],
    },
    {
        id: "gender",
        label: "Gender",
        placeholder: "Select Gender",
        type: "radio",
        validationType: "",
        options: [
            {
                label: "Male", value: "male"
            },
            {
                label: "Female", value: "female"
            }
        ],
        validations: [
            {
                type: "required",
                params: ["select any one gender"],
            }
        ],
    },
    {
        id: "country",
        label: "Country",
        placeholder: "Select Country",
        type: "select",
        validationType: "",
        options: [
            {
                label: "India", value: "india"
            },
            {
                label: "US", value: "us"
            },
            {
                label: "UAE", value: "uae"
            },
            {
                label: "France", value: "france"
            }
        ]
    },
];

const FormComp = (props) => {
    
    const handleFormSubmit = e => {
        e.preventDefault();
        let finalData = [];
        for(let i = 0; i < formDetails.length-1 ; i++){
            let fKey = formDetails[i].id;
            finalData[fKey] = e.currentTarget[i].value;
        }
        props.userData(finalData);
      }
    return (
        <> <h3>Form</h3>
            <Form onSubmit={handleFormSubmit}>
                {formDetails.map((ele, index) => {
                    return (
                        <Form.Group className="mb-3" controlId={`Form.${ele.id}_${index + 1}`} id={ele.id} key={`Form.${ele.id}_${index + 1}`} >
                            <Form.Label>{ele.label}</Form.Label>
                            {
                                (ele.type == 'text'|| ele.type == 'number') && (<Form.Control type={`${ele.type}`} placeholder={`${ele.placeholder}`} required/>)
                            }
                            {
                                ele.type == 'radio' && (
                                    ele.options.map((radioEle, radioIndex) => {
                                        return (
                                            <Form.Check
                                                required
                                                inline
                                                label={radioEle.label}
                                                name={ele.id}
                                                type={ele.type}
                                                id={`inline-${ele.type}`}
                                                value={radioEle.value}
                                            />
                                        )
                                    })
                                )
                            }
                            {ele.type == 'select' && (
                                <Form.Select aria-label={`${ele.placeholder}`}>
                                    {ele.options.map((selectEle) => {
                                        return (<option value={selectEle.value}>{selectEle.label}</option>)
                                    })}
                                </Form.Select>
                            )
                            }

                        </Form.Group>
                    );
                })}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default FormComp;

// ele.options.map((radioele,index)=>{
//     <Form.Check
//         inline
//         label="1"
//         name="group1"
//         type={type}
//         id={`inline-${type}-1`}
//     />
//     })