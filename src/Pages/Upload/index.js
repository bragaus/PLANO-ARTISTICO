import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';

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

const Checkbox = ({ name, tipo }) => {
    const [checked, setChecked] = useState(false);
    return (
        <Section className="checkbox" checked={checked}>
            <Field name={name}>
                {({ field, form }) => (<label>
                    <input
                        type="radio"
                        checked={field.value.includes(tipo)}
                        onChange={() => {
                            const tipoSelecionado = tipo;
                            form.setFieldValue('tipo', tipoSelecionado);
                        }}     
                        onClick={() => setChecked(!checked)}                                          
                    />
                    {tipo}
                </label>)}
            </Field>
        </Section> 
    );
};

const Upload = () => {

    const [arquivos, setArquivos] = useState([]);
    const [resposta, setResposta] = useState('');

    // inserir as artes no estado conjutoArtes
    function lidarComArteInseridaNoDropzone(artes) {
        artes.forEach(arte => {

            setArquivos([...arquivos, arte]);

        });
    }    

    const enviarArquivoParaBackend = (post, { resetForm }) => {

        setResposta('sending...');

        var formulario = new FormData();

        // inserir cada arte upada no formulário
        arquivos.forEach((arquivo) => {
            formulario.append('file', arquivo);
        });          
        
        // inserir as informações da arte no formulário 
        formulario.append('titulo', post.titulo);
        formulario.append('desc', post.desc);
        formulario.append('tipo', post.tipo);

        if (arquivos.length > 1) {

            // Enviando a arte e quando receber a resposta, vai parar de mostrar
            // carregando e vai guardar o status do upload
            api.post('/postarArteFrenteVerso', formulario)
            .then(({ status }) => {
                status === 200 ? setResposta('OK') : setResposta('Oh fuck! try again.');
            })
            .catch((erro) => {
                console.log(erro)
            });

        } else {         

            // Enviando a arte, fazendo o percentual de upload e recebendo o status do upload
            api.post('/postarArte', formulario)
            .then(({ status }) => {
                status === 200 ? setResposta('OK') : setResposta('Oh fuck! try again.');
            })
            .catch((erro) => {
                console.log(erro)
            });

        }

        resetForm({})
        setArquivos([])
    }

    const validacao = Yup.object({
        titulo: Yup.string().max(30, "Too Long!").required('Enter title'),
        arquivo: Yup.array().required('Enter artwork').min(1).max(1),
        desc: Yup.string().max(500, "Too Long!"),
        tipo: Yup.string().required('Enter local')
    }) 
    
    return (

        <Container>
            <Formik
                initialValues={{ titulo: '', arquivo: [], desc: '', tipo: '' }}
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
                            <Checkbox name="tipo" tipo="ILLUSTRATION"/>                            
                            <Checkbox name="tipo" tipo="COVER ART"/>                             
                            <Checkbox name="tipo" tipo="COLLAGE"/>
                        </div>
                        <ErrorMessage name="tipo"/>               
                    </Fieldset>

                    <Flex>
                        {resposta && ( <span>{resposta}</span> )}
                        <Button type="submit">PUBLISH</Button>
                    </Flex>     
                </Form>
            )}

            </Formik>
        </Container>

    );

}

export default Upload;