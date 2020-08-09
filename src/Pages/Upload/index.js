import React from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import Dropzone from '../../components/Dropzone';
import { Input, Label, Container, Div } from './styles';


const Campo = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (<>
        <Label htmlFor={props.name}>{label}</Label>
        <Input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
    </>);
};

const Upload = () => {

    const validacao = Yup.object({
        titulo: Yup.string().max(30, "Too Long!").required('Required'),
        arquivo: Yup.array().required('Arte').min(1).max(1),
        desc: Yup.string().max(500, "Too Long!").required('descrição obrigatoria'),
        local: Yup.string().required('Required')
    }) 

    return (

        <Container>
            <Formik
                initialValues={{ titulo: '', arquivo: [], desc: '', local: '' }}
                validationSchema={validacao}
            >

            {({ setFieldValue }) => (    

                <Form>
                    <Campo 
                        label="ARTWORK TITLE"
                        name="titulo"
                        type="text"
                        placeholder="What is your artwork title?"                    
                    />

                    <Div>
                        <Dropzone 
                            setFieldValue={setFieldValue}                            
                            mensagem="Front Image"                    
                        />
                        <Dropzone 
                            setFieldValue={setFieldValue}                            
                            mensagem="Back Image"                    
                        />
                        <Dropzone 
                            setFieldValue={setFieldValue}                            
                            mensagem="Preview Image"                    
                        />
                    </Div>

                    
                </Form>
            )}

            </Formik>
        </Container>

    );

}

export default Upload;