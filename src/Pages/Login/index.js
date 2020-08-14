import React from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import { Container, Section, Fieldset, Button, Flex } from './styles';

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
                        <h1>LOGIN</h1>

                        <Flex>
                            <div>
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
                            </div>

                            <Button type="submit">SIGN IN</Button>
                        </Flex>
                    </Fieldset>

                </Form>
            </Formik>
        </Container>
    );

}

export default Login;