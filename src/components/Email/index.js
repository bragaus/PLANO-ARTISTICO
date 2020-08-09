import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Draggable from 'react-draggable';
import * as Yup from 'yup';

import api from '../../services/api';

import { 
    Container,
    ParteDeCima,
    Fechar,
    Minimizar,
    Maximizar,
    Enviar,
    Anexo,
    Flex 
} from './styles';


const TelaEmail = ({ setTelaDeEmail }) => {

    // Esses estados servem para controle do tamanho da tela do email
    const [maximizar, setMaximizar] = useState(0);
    const [minimizar, setMinimizar] = useState(0);

    // Esse estado serve para guardar o nome do arquivo upado
    const [arquivoUpado, setArquivoUpado] = useState('');

    // Esse estado serve para mostrar ao usuario que o email 
    // está sendo enviado e se foi enviado com sucesso
    const [statusDoEnvio, setStatusDoEnvio] = useState('');

    // Esse estado serve para guardar os valores da posição da tela de email
    const [controladorDePosicao, setControladorDePosicao] = useState({ x: 0, y: 0 });

    // Essa função serve para atribuir o valor da posição no estado controladorDePosicao
    const quandoArrastar = (e, posicao) => {
        const {y, x} = posicao

        setControladorDePosicao({y,x})
    }

    // Função que recebe os dados do formulario e envia para rota que faz o envio do email
    function enviarDadosParaRotaDeEmail(dados, { resetForm }) {
        setStatusDoEnvio('Sending...')

        var formulario = new FormData();
        formulario.append('file', dados.arquivo);
        formulario.append('email', dados.email);
        formulario.append('corpo', dados.corpo);    

        // Rota que faz o envio do email
        api.post('/email', formulario)

        // Resposta do status do envio
        .then((res) => { 
            if (res.status === 200) {
                setStatusDoEnvio('success')
            }
        })

        // Resposta caso ocorra algum erro
        .catch(() => { 
            setStatusDoEnvio('error, please send again')
        })

        // Esvaziando os campos do email
        resetForm({})
        setArquivoUpado('')
    }

    // formato que pode ser upado no input de email
    const formatosSuportados = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png"
    ];    

    // Validação das entradas
    const EsquemaDeValidacao = Yup.object().shape({
        email: Yup.string().email().required('enter email'),
        corpo: Yup.string().max(500, "Too Long!").required('enter any message'),
        arquivo: Yup.mixed().test('fileFormat', 'Unsupported Format', arquivo => {
            if (!arquivo) { 
                return true;
            }            
            arquivo && formatosSuportados.includes(arquivo.type)
        })        
    })      

    const camposDoFormulario = {
        email: '', corpo: '', arquivo: null
    };

    return(<>
        <Draggable
            // Ativar o arrastavel apenas no id
            handle="#arrastavel"
            // Defini zona limite para arrastar
            // bounds="parent" 
            // Controlador de posição
            onDrag={quandoArrastar}
            // Zerando a posição se a tela for maximizada
            position={maximizar ? {x: 0, y: 0} : controladorDePosicao}
        >

        <Container maximizador={maximizar} minimizador={minimizar}>
            <ParteDeCima id="parteDeCima">
                <div id="arrastavel">
                    <h1>NEW MESSAGE</h1>
                </div>

                <div>

                    <label htmlFor="ButtonMinizar">
                        <Minimizar minimizador={minimizar}/>
                    </label>
                    <button
                        onClick={() => minimizar ? setMinimizar(0) : setMinimizar(1) }
                        id="ButtonMinizar"                 
                    />

                    <label htmlFor="ButtonMaximizar" id="labelMaximizar">
                        <Maximizar maximizador={maximizar}/>
                    </label>
                    <button
                        onClick={() => maximizar ? setMaximizar(0) : setMaximizar(1) }
                        id="ButtonMaximizar"                  
                    />

                    <label htmlFor="ButtonFechar">
                        <Fechar />
                    </label>
                    <button
                        onClick={() => setTelaDeEmail(false)}
                        id="ButtonFechar"               
                    />
                    
                </div>
            </ParteDeCima>

            <Formik 
                initialValues = { camposDoFormulario } 
                validationSchema = { EsquemaDeValidacao }                     
                onSubmit = { enviarDadosParaRotaDeEmail }
            >

            {({ errors, touched, setFieldValue }) => (

                <Form>                  
                    <Field 
                        name="to" 
                        placeholder="TO: BUSINESS.PLANOART@GMAIL.COM" 
                        type="text"
                        disabled 
                    />                    
                    <Field 
                        name="email" 
                        placeholder="FROM: ENTER YOUR EMAIL ADDRES" 
                        type="text"          
                    />
                    <Field
                        name="corpo" 
                        placeholder="MESSAGE" 
                        component="textarea" 
                        rows="5"
                    />

                    <Flex className="arquivosUpados">
                        {arquivoUpado && <>
                            <span>{arquivoUpado}</span>
                            <button
                                onClick={()=> {
                                    setArquivoUpado('')
                                }}
                            >
                                x
                            </button>
                        </>}
                    </Flex>

                    <Flex>
                        <div>
                            <label htmlFor="inputEnviar" id="labelEnviar">
                                <Enviar />
                            </label>
                            <button type="submit" id="inputEnviar"/>

                            <ul>
                                {errors.arquivo && arquivoUpado && <li>{errors.arquivo}</li>} 
                                {errors.corpo && touched.corpo && <li>{errors.corpo}</li>} 
                                {errors.email && <li>{errors.email}</li>}
                                {statusDoEnvio && <li>{statusDoEnvio}</li>}
                            </ul>
                        </div>


                        <label htmlFor="inputAnexo" id="labelAnexo">
                            <Anexo />
                        </label>
                        <input 
                            type="file" 
                            name="arquivo" 
                            id="inputAnexo" 
                            onChange={(arquivo) => {
                                setArquivoUpado(arquivo.target.files[0].name)
                                setFieldValue('arquivo', arquivo.target.files[0])
                            }}
                        />

                    </Flex>

                </Form>

            )}
            
            </Formik>
        </Container>

        </Draggable>
    </>)
}

export default TelaEmail;