import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import Dropzone from '../../components/Dropzone';
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

    const [arquivos, setArquivos] = useState([]);

    // inserir as artes no estado conjutoArtes
    function lidarComArteInseridaNoDropzone(artes) {
        artes.forEach(arte => {

            setArquivos([...arquivos, arte]);

        });
    }    

    const enviarArquivoParaBackend = (valores, { reset }) => {
        console.log(valores);
        console.log(arquivos);
    }

    const validacao = Yup.object({
        titulo: Yup.string().max(30, "Too Long!").required('Enter title'),
        // arquivo: Yup.array().required('Enter artwork').min(1).max(1),
        desc: Yup.string().max(500, "Too Long!").required('Enter description'),
        local: Yup.string().required('Enter local')
    }) 

    return (

        <Container>
            <Formik
                initialValues={{ titulo: '', arquivo: [], desc: '', local: '' }}
                validationSchema={validacao}
                onSubmit={enviarArquivoParaBackend}
            >

            {({ setFieldValue }) => (    

                <Form>
                    <Campo 
                        label="TITLE"
                        name="titulo"
                        type="text"
                        placeholder="What is your artwork title?"                    
                    />

                    <Fieldset>
                        <legend>ARTWORK</legend>
                        <div>
                            <Dropzone
                                quandoinserirarte={lidarComArteInseridaNoDropzone}
                                setfieldvalue={setFieldValue}                            
                                mensagem="Front Image"                    
                            />
                            <Dropzone
                                quandoinserirarte={lidarComArteInseridaNoDropzone}
                                setfieldvalue={setFieldValue}                            
                                mensagem="Back Image"                    
                            />
                            <Dropzone
                                quandoinserirarte={lidarComArteInseridaNoDropzone}
                                setfieldvalue={setFieldValue}                            
                                mensagem="Preview Image"                    
                            />
                        </div>
                        <ErrorMessage name="arquivo"/>
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
                        <legend>LOCATION</legend>
                        <div>
                            <Checkbox name="local" tipo="ILLUSTRATION"/>                            
                            <Checkbox name="local" tipo="COVER ART"/>                             
                            <Checkbox name="local" tipo="COLLAGE"/>
                        </div>
                        <ErrorMessage name="local"/>               
                    </Fieldset>

                    <Flex>
                        <Button type="submit">PUBLISH</Button>
                    </Flex>     
                </Form>
            )}

            </Formik>
        </Container>

    );

}

export default Upload;