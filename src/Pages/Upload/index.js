import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import Dropzone from '../../components/Dropzone';
import { Container, Div, Section, Fieldset } from './styles';



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

function Checkbox({ name, tipo }) {

    const [checked, setChecked] = useState(false);

    return (
        <Section className="checkbox" checked={checked}>
            <Field name={name}>
                {({ field, form }) => (

                    <label>
                        <input
                            type="radio"
                            checked={field.value.includes(tipo)}
                            onChange={() => {

                                const tipoSelecionado = tipo;
                                form.setFieldValue('local', tipoSelecionado);

                            }}     
                            onClick={() => setChecked(!checked)}                                          
                        />
                        
                        {tipo}

                    </label>

                )}
            </Field>
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
                onSubmit={(values) => {
                    console.log(values)
                }}
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
                            <Checkbox name="local" tipo="ILLUSTRATION"/>                            
                            <Checkbox name="local" tipo="COVER ART"/>                             
                            <Checkbox name="local" tipo="COLLAGE"/>
                        </div>                  
                    </Fieldset>

                    <button type="submit">Submit</button>          
                </Form>
            )}

            </Formik>
        </Container>

    );

}

export default Upload;