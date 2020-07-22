import React from 'react';
import { Formik, Form, Field } from 'formik';

const TelaEmailDispositivoMovel = () => {

    const camposDoFormulario = {
        email: '', corpo: '', arquivo: null
    };

    return (
    <Formik
        initialValues = { camposDoFormulario }     
    >

    {({ errors, touched, setFieldValue }) => (

        <Form>                   
            <Field 
                name="email" 
                placeholder="FROM: ENTER YOUR EMAIL ADDRES" 
                type="text"          
            />
            <Field
                name="corpo" 
                placeholder="MESSAGE" 
                component="text"
            />

            <input type="submit"/>

        </Form>

    )}
    
    </Formik>        
    )
}

export default TelaEmailDispositivoMovel;