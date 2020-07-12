import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import api from '../../services/api';
import { Container, ParteDeCima, Fechar, Minimizar, Maximizar, Enviar, Anexo, Flex } from './estilo';
import Draggable from 'react-draggable';
import * as Yup from 'yup';
import maximizador from '../../estaticos/maximizar.svg';
import fechar from '../../estaticos/fechar.svg';
import minimizarSVG from '../../estaticos/minimizar.svg';
import enviar from '../../estaticos/send.svg';
import anexo from '../../estaticos/anexo.svg';

const TelaEmail = ({ setTelaDeEmail }) => {

    // Esses estados controlam o status de envio do email
    const [emailEnviado, setEmailEnviado] = useState(false);
    const [emailNaoEnviado, setEmailNaoEnviado] = useState(false);

    // Esse estado serve para ocultar o botão de enviar email caso o email já tenha sido enviado
    const [desativarEnvioDeEmail, setDesativarEnvioDeEmail] = useState(false);

    // Esse estado serve para mostrar enviando quando for clicado no botão enviar
    const [enviando, setEnviando] = useState('SEND');

    // Esses estados servem para controle do tamanho da tela do email
    const [maximizar, setMaximizar] = useState(false);
    const [minimizar, setMinimizar] = useState(false);

    // Esses estados servem para controlar as mensagem de erro do input de email e de mensagem
    const [mensagemDeErroDoEmail, setMensagemDeErroDoEmail] = useState('');
    const [mensagemDeErroDoCorpo, setMensagemDeErroDoCorpo] = useState('');

    const [arquivoUpado, setArquivoUpado] = useState('');

    // Esse estado serve para guardar os valores da posição da tela de email
    const [controladorDePosicao, setControladorDePosicao] = useState({
        x: 0, y: 0
    });

    // Essa função serve para atribuir o valor da posição no estado controladorDePosicao
    const quandoArrastar = (e, posicao) => {
        const {y, x} = posicao

        setControladorDePosicao({y,x})
    }

    // Função que recebe os dados do formulario e envia para rota que faz o envio do email
    function enviarDadosParaRotaDeEmail(dados) {
        console.log(dados)
        // // Mostrar enviando quando for clicado no botão enviar
        // setEnviando('SENDING...');

        // // Rota que faz o envio do email
        // api.post('/email', dados)
        // .then((res) => { // Resposta do status do envio
        //     if (res.status === 200) {
        //         setEmailEnviado(true);
        //         setEnviando('SEND');
        //         setDesativarEnvioDeEmail(true);
        //     } else {
        //         setEmailNaoEnviado(true);
        //         setEnviando('SEND AGAIN');
        //     }
        // })
        // .catch(() => { // Resposta caso ocorra algum erro
        //     setEmailNaoEnviado(true);
        //     setEnviando('SEND AGAIN');
        // })
    }

    // Validação das entradas
    const EsquemaDeValidacao = Yup.object().shape({
        email: Yup.string().email().required('enter email'),
        corpo: Yup.string().max(500, "Too Long!").required('enter any message'),
    })      

    const camposDoFormulario = {
        email: '', corpo: '', arquivo: null
    };

    return(<>
        <Draggable
            // Ativar o arrastavel apenas no id
            handle="#parteDeCima"
            // Defini zona limite para arrastar
            bounds="parent" 
            // Controlador de posição
            onDrag={quandoArrastar}
            // Zerando a posição se a tela for maximizada
            position={maximizar ? {x: 0, y:0} : controladorDePosicao}
        >

        <Container maximizador={maximizar} minimizador={minimizar}>
            <ParteDeCima id="parteDeCima">
                <div>
                    <h1>NEW MESSAGE</h1>
                </div>

                <div>
                    <Minimizar 
                        onClick={() => minimizar ? setMinimizar(false) : setMinimizar(true) }
                        minimizador={minimizar}
                    />    
                    <Maximizar 
                        onClick={() => maximizar ? setMaximizar(false) : setMaximizar(true) }
                        maximizador={maximizar}         
                    />                                   
                    <Fechar 
                        onClick={() => setTelaDeEmail(false)}
                    />
                </div>
            </ParteDeCima>

            <Formik 
                initialValues = { camposDoFormulario } 
                validationSchema = { EsquemaDeValidacao }                     
                onSubmit = { enviarDadosParaRotaDeEmail }
            >

            {({ errors, touched }) => (

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
                        <span>nome do arquivo nome do arquivo nome do arquivo nome do arquivo nome do arquivo nome do arquivo nome do arquivo nome do arquivo nome do arquivo </span>
                        <button>x</button>
                    </Flex>

                    <Flex>
                        <label htmlFor="inputEnviar"  id="labelEnviar">
                            <Enviar />
                        </label>
                        <button type="submit" id="inputEnviar"/>

                        <span>mensagem de erro mensagem de erro mensagem de erro </span>     

                        <label htmlFor="inputAnexo" id="labelAnexo">
                            <Anexo />
                        </label>
                        <Field 
                            type="file" 
                            name="arquivo" 
                            id="inputAnexo" 
                            onChange={(arquivo) => {
                                setArquivoUpado(arquivo.target.files[0].name)
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