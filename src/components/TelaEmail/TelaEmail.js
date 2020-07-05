import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import api from '../../services/api';
import { Divisor } from './estilo';
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

    const [mensagemDeErroDoEmail, setMensagemDeErroDoEmail] = useState('');
    const [mensagemDeErroDoCorpo, setMensagemDeErroDoCorpo] = useState('');

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

        // Mostrar enviando quando for clicado no botão enviar
        setEnviando('SENDING...');

        // Rota que faz o envio do email
        api.post('/email', dados)
        .then((res) => { // Resposta do status do envio
            if (res.status === 200) {
                setEmailEnviado(true);
                setEnviando('SEND');
                setDesativarEnvioDeEmail(true);
            } else {
                setEmailNaoEnviado(true);
                setEnviando('SEND AGAIN');
            }
        })
        .catch(() => { // Resposta caso ocorra algum erro
            setEmailNaoEnviado(true);
            setEnviando('SEND AGAIN');
        })
    }

    // Validação das entradas
    const EsquemaDeValidacao = Yup.object().shape({
        email: Yup.string().email().required('enter email'),
        corpo: Yup.string().max(500, "Too Long!").required('enter any message'),
    })      

    const camposDoFormulario = {
        email: '', corpo: ''
    };

    return(<>
        <Draggable
            // Ativar o arrastavel apenas no id
            handle="#arrastavel"
            // Defini zona limite para arrastar
            bounds="parent" 
            // Controlador de posição
            onDrag={quandoArrastar}
            // Zerando a posição se a tela for maximizada
            position={maximizar ? {x: 0, y:0} : controladorDePosicao}
        >

        <Divisor maximizador={maximizar} minimizador={minimizar}>

            <ul className="aparecerMinimizado">
                <li id="arrastavel">
                    <div className="flexivel">
                        <text>NEW MESSAGE</text>

                        <img 
                            src={fechar}
                            onClick={() => setTelaDeEmail(false)}
                            alt="fechar"
                        />                    
                        <img 
                            src={maximizador} 
                            src={maximizador} 
                            onClick={() => {
                                if (maximizar) {
                                    setMaximizar(false)                                
                                } else {
                                    document.documentElement.scrollTop = 0     
                                    document.body.scrollTop = 0
                                    setMaximizar(true)                                                 
                                }
                            }}
                            alt="maximizar"
                        />
                        <img 
                            src={minimizarSVG}
                            onClick={() => {
                                if (minimizar) {
                                    setMinimizar(false)
                                } else {
                                    setMinimizar(true)
                                    // deixa maximizar como false para habilitar o arrastavel
                                    setMaximizar(false)
                                }
                            }}
                            alt="minizar"
                        />  
                    </div>
                </li>                
            </ul>

            <ul>
                <li id="arrastavel">
                    <div className="flexivel">
                        <div>
                            <text>NEW MESSAGE</text>
                            
                            {mensagemDeErroDoCorpo ? 
                            <span>{mensagemDeErroDoCorpo}</span> : null}

                            {mensagemDeErroDoEmail && !mensagemDeErroDoCorpo ? 
                            <span>{mensagemDeErroDoEmail}</span> : null}                              
                        </div>
                        <div>
                            <img 
                                src={minimizarSVG}
                                onClick={() => {
                                    if (minimizar) {
                                        setMinimizar(false)
                                    } else {
                                        setMinimizar(true)
                                        // deixa maximizar como false para habilitar o arrastavel
                                        setMaximizar(false)
                                    }
                                }}
                                alt="minizar"
                            />
                            <img 
                                src={maximizador} 
                                onClick={() => {
                                    if (maximizar) {
                                        setMaximizar(false)                                
                                    } else {
                                        document.documentElement.scrollTop = 0     
                                        document.body.scrollTop = 0
                                        setMaximizar(true)                                                 
                                    }
                                }}
                                alt="maximizar"
                            />                                                     
                            <img 
                                src={fechar}
                                onClick={() => setTelaDeEmail(false)}
                                alt="fechar"
                            />
                        </div>   
                    </div>
                </li>
                <li>TO: BUSINESS.PLANOART@GMAIL.COM</li>

                <Formik 
                    initialValues = { camposDoFormulario } 
                    validationSchema = { EsquemaDeValidacao }                     
                    onSubmit = { enviarDadosParaRotaDeEmail }
                >

                {({ handleSubmit, errors, touched }) => (
                    
                <Form>
                    <li>

                        <Field 
                            name="email" 
                            placeholder="FROM: ENTER YOUR EMAIL ADDRES" 
                            type="text"
                        />
                        {errors.email && touched.email ? 
                        setMensagemDeErroDoEmail(errors.email) : setMensagemDeErroDoEmail('')}

                    </li>
                    <li className="mensagem">

                        <Field
                            name="corpo" 
                            placeholder="MESSAGE" 
                            component="textarea" 
                            rows="5"
                        />
                        {errors.corpo && touched.corpo ? 
                        setMensagemDeErroDoCorpo(errors.corpo) : setMensagemDeErroDoCorpo('') }      

                    </li>
                    <li>
                        <div className="flexivel">
                            <img className="botaoEnviar" src={enviar} alt="enviar"/>
                            <img className="botaoAnexo" src={anexo} alt="anexo"/>
                        </div>
                    </li>
                </Form>

                )}
                </Formik>
            </ul>
                
        </Divisor>
        </Draggable>
    </>)
}

export default TelaEmail;