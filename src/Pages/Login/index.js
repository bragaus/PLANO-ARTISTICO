import React,{ useContext } from 'react';
import { Formik, Field, Form, useField } from 'formik';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';
import * as Yup from 'yup';

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

    const { lidarComLogin } = useContext(Contexto);    

    const validacao = Yup.object({
        nome: Yup.string().required('Enter username'),
        senha: Yup.string().required('Enter password')
    });

    return (
        <Container>
            <Formik
                initialValues={{nome: '', senha: ''}}
                validationSchema={validacao}
                onSubmit={lidarComLogin}
            >

            {({ handleSubmit }) => (                
                <Form onSubmit={handleSubmit}>

                    <Fieldset>
                        <h1>LOGIN</h1>

                        <Flex>
                            <div>
                                <Campo
                                    label="USERNAME"
                                    name="nome"
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
            )}

            </Formik>
        </Container>
    );

}

export default Login;