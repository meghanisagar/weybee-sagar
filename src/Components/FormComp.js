import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
    const [validated, setValidated] = useState(false);
    const handleFormSubmit = e => {
        e.preventDefault();
        // get object od uncontroled form data 
        const formData = new FormData(e.target);
        let finalData = Object.fromEntries(formData.entries());
        debugger;
        props.userData(finalData);
    }



    return (
        <> <h3>Form</h3>
            <Form onSubmit={handleFormSubmit} validated={validated}>
                {formDetails.map((ele, index) => {
                    return (
                        <Form.Group className="mb-3" controlId={ele.id} key={ele.id} >
                            <Form.Label>{`${ele.label} `}</Form.Label>
                            {
                                (ele.type == 'text' || ele.type == 'number') && (
                                    <><Form.Control
                                        type={ele.type}
                                        placeholder={ele.placeholder}
                                        name={ele.id}
                                        id={ele.id}
                                        key={ele.id}
                                        required
                                    />
                                        <Form.Control.Feedback type="invalid">
                                            {`Please provide a valid ${ele.label}.`}
                                        </Form.Control.Feedback>
                                    </>
                                )
                            }
                            {
                                ele.type == 'radio' && (
                                    ele.options.map((radioEle) => {
                                        return (
                                            <>
                                                <Form.Check
                                                    inline
                                                    label={radioEle.label}
                                                    type={ele.type}
                                                    value={radioEle.value}
                                                    name={ele.id}
                                                    id={ele.id}
                                                    key={ele.id}
                                                    required={false}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {`Please select ${ele.label}.`}
                                                </Form.Control.Feedback>
                                            </>
                                        )
                                    })
                                )
                            }
                            {ele.type == 'select' && (
                                <>
                                    <Form.Select
                                        aria-label={`${ele.placeholder}`}
                                        name={ele.id}
                                        id={ele.id}
                                        key={ele.id}
                                        required={true}>
                                        {ele.options.map((selectEle) => {
                                            return (<option value={selectEle.value}>{selectEle.label}</option>)
                                        })}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {`Please select ${ele.label}.`}
                                    </Form.Control.Feedback>
                                </>
                            )
                            }
                        </Form.Group >
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