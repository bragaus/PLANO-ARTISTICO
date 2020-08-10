import React from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import Dropzone from '../../components/Dropzone';
import { Container, Div, Section, Fieldset } from './styles';
import { useState } from 'react';


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

const Checkbox = ({label, children, ...props}) => {

    const [checked, setChecked] = useState(false);
    const [field, meta] = useField(props);

    return (
        <Section className="checkbox" checked={checked}>

            <label className="checkbox" >
                <input 
                    type="checkbox" 
                    {...field} 
                    {...props}
                    onClick={() => setChecked(!checked)}
                />
                {children}
            </label>

            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}

        </Section>        
    );
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

                    <Fieldset>
                        <legend>UPLOAD</legend>
                        <div>
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
                        </div>
                    </Fieldset>

                    <Campo 
                        label="DESCRIPTION"
                        name="desc"
                        type="text"
                        as="textarea"
                        placeholder="What is your artwork description?"
                        rows="4"                 
                    />

                    <Fieldset>
                        <legend>ARTWORK LOCATION</legend>
                        <div>
                            <Checkbox name="local">
                                ILLUSTRATION
                            </Checkbox>                                
                            <Checkbox name="local">
                                COVER ART
                            </Checkbox>                                
                            <Checkbox name="local">
                                COLLAGE
                            </Checkbox>
                        </div>                  
                    </Fieldset>
                              
                </Form>
            )}

            </Formik>
        </Container>

    );

}

export default Upload;