import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

const Login = () => {

    const { lidarComLogin } = useContext(Contexto);

    const camposDoFormulario = {
        nome: '', senha: ''
    };

    return(
        <>
            <h1>Login</h1>
            
            <Formik 
                initialValues = { camposDoFormulario } 
                onSubmit = { lidarComLogin }
            >

            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} >
                    <Field name="nome" placeholder="nome do usuario" type="text" />
                    <Field name="senha" placeholder="senha do usuario" type="password" />
                    <button type="submit" > Submit </button> 
                </Form>
            ) }

            </Formik>
        </>
    )
}

export default Login;