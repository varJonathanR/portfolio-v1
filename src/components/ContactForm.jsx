import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function ContactForm() {

    const [formSent, setFormSent] = useState(false)

    return (
    <>
        <Formik 
            initialValues={{
                name: "",
                email: "",
                message: ""
            }}
            validate={(valores) => {
                let errores = {};

                //Name validation
                if(!valores.name) {
                    errores.name = "Please enter a name"
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                    errores.name = "Name can only contain letters and spaces."
                }

                //Email validation
                if(!valores.email) {
                    errores.email = "Please enter an email"
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                    errores.email = "Email can only contain letters, numbers, dots, hyphens and underscores."
                }

                return errores;
            }}  
            onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log(valores);
                console.log("Form send");
                setFormSent(true);
                setTimeout(() => setFormSent(false), 5000);
            }} 
        >
            {({ errors, values, handleChange}) => (
                <form 
                    name='contact' 
                    autoComplete='off' 
                    method='post'
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="top-form">
                        <label htmlFor="name">Name:
                            <Field 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder='Your name...' 
                                required
                            />
                            <ErrorMessage name='name' component={() => (
                                <div className='error'>{errors.name}</div>
                            )} />
                        </label>
                        <label htmlFor="email">Email:
                            <Field 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder='email@email.com'
                                required
                            />
                            <ErrorMessage name='email' component={() => (
                                <div className='error'>{errors.email}</div>
                            )} />
                        </label>
                    </div>
                    <label htmlFor="message" className='message'>Write your message!
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10" 
                            placeholder='SAY HI!' 
                            value={values.message} 
                            onChange={handleChange}
                            required 
                        ></textarea>
                    </label>
                    <div className="button-container">
                        <button type='submit'>SUBMIT</button>
                        { formSent && <p className="success">Form submitted successfully</p> }
                    </div>
                </form>
            )}
        </Formik>
    </>
    )
}

export default ContactForm