import React from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import { Container, Section, Fieldset } from './styles';

const Campo = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Section>
            <label htmlFor={props.name}>{label}</label>
            <Field {...field} {...props}/>

            {meta.touched && meta.error && (
                <div>{meta.error}</div>
            )}
        </Section>
    );  
};

const Login = () => {

    return (
        <Container>
            <Formik>
                <Form>

                    <Fieldset>
                        <legend>LOGIN</legend>

                        <Campo
                            label="USERNAME"
                            name="usuario"
                            placeholder="Type your username" 
                            type="text"                  
                        />
                        <Campo
                            label="PASSWORD"
                            name="senha"
                            placeholder="Type your password" 
                            type="password"                  
                        />

                        <button type="submit">SIGN IN</button>
                    </Fieldset>

                </Form>
            </Formik>
        </Container>
    );

}

export default Login;