import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import api from '../../services/api';
import { Divisor, DivisorFlexivel } from './estilo';
import Draggable from 'react-draggable';
import * as Yup from 'yup';

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
            // Ativar o arrastavel apenas no header
            handle="header"
            // Defini zona limite para arrastar
            bounds="parent" 
            // Controlador de posição
            onDrag={quandoArrastar}
            // Zerando a posição se a tela for maximizada
            position={maximizar ? {x: 0, y:0} : controladorDePosicao}
        >

        <Divisor maximizador={maximizar} minimizador={minimizar}>

        <header>
            {minimizar ?
            <h1 onClick={() => setMinimizar(false)}>email sender</h1> : 
            <h1>email sender</h1>}
            
            <ul>
                <li>
                    <button 
                        onClick={() => {
                            if (minimizar) {
                                setMinimizar(false)
                            } else {
                                setMinimizar(true)
                                // deixa maximizar como false para habilitar o arrastavel
                                setMaximizar(false)
                            }
                        }}
                    >
                        min
                    </button>
                </li>
                
                {minimizar ? null : <li>
                    <button 
                        onClick={() => maximizar ? setMaximizar(false) : setMaximizar(true)}
                    >
                        max
                    </button>
                </li>}
                
                <li>
                    <button onClick={() => setTelaDeEmail(false)}> 
                        close
                    </button>
                </li>
            </ul>
        </header>

        <main>
            <h2>To: business.planoart@gmail.com</h2>

            <Formik 
                initialValues = { camposDoFormulario } 
                validationSchema = { EsquemaDeValidacao }                     
                onSubmit = { enviarDadosParaRotaDeEmail }
            >

            {({ handleSubmit, errors, touched }) => (
                <Form onSubmit={handleSubmit} >                     
                    <Field 
                        name="email" 
                        placeholder="From: Enter your email address" 
                        type="text"
                    />
                    {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                    ) : null }


                    <Field 
                        name="corpo" 
                        placeholder="Message:" 
                        component="textarea" 
                        rows="5"
                    />
                    {errors.corpo && touched.corpo ? (
                        <div>{errors.corpo}</div>
                    ) : null }                        

                    <DivisorFlexivel>

                        {/* Mensagem de erro ao enviar email */}
                        {emailNaoEnviado && <span>please try again</span>}

                        {/* O botão de enviar email só é mostrado se ainda não foi
                        enviado email ou se o email foi enviado com erro */}
                        {!desativarEnvioDeEmail && <button
                            type="submit"
                            style={ // Travar o botão se o email estiver sendo enviado
                                enviando === 'SENDING...' ? 
                                {pointerEvents: 'none'} : 
                                {pointerEvents: 'all'}
                            }
                        >
                            {enviando}
                        </button>}

                        {/* Mensagem de email enviado com sucesso */}
                        {emailEnviado && <span>Sent with success</span>}

                    </DivisorFlexivel>

                </Form>
            ) }

            </Formik>
        </main>
                
        </Divisor>
        </Draggable>
    </>)
}

export default TelaEmail;