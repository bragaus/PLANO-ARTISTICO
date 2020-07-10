// import React, { useState } from 'react';
// import { DivTelaEmailCelular } from './estilo';
// import fechar from '../../estaticos/fechar.svg';
// import enviar from '../../estaticos/send.svg';
// import anexo from '../../estaticos/anexo.svg';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const TelaEmailCelular = () => {

//     const [mensagemDeErroDoEmail, setMensagemDeErroDoEmail] = useState('');
//     const [mensagemDeErroDoCorpo, setMensagemDeErroDoCorpo] = useState('');

//     const enviarDadosParaRotaDeEmail = (e) => {
//         console.log(e)
//     }

//     // Validação das entradas
//     const EsquemaDeValidacao = Yup.object().shape({
//         email: Yup.string().email().required('enter email'),
//         corpo: Yup.string().max(500, "Too Long!").required('enter any message'),
//     })      

//     const camposDoFormulario = {
//         email: '', corpo: ''
//     };

//     return (
//         <DivTelaEmailCelular>
//             <ul>
//                 <li>
//                     <div className="flexivel">
//                         <div>
//                             <text>NEW MESSAGE</text>
//                             <span>please enter with valid email</span>
//                         </div>

//                         <img src={fechar} alt="close"/>
//                     </div>
//                 </li>
//                 <li>
//                     <text>TO: BUSINESS.PLANOART@GMAIL.COM</text>
//                 </li>

//                 <Formik 
//                     initialValues = { camposDoFormulario } 
//                     validationSchema = { EsquemaDeValidacao }                     
//                     onSubmit = { enviarDadosParaRotaDeEmail }
//                 >

//                 {({handleSubmit, errors, touched}) => (
//                     <Form>

//                         <li>
//                             <Field 
//                                 name="email" 
//                                 placeholder="FROM: ENTER YOUR EMAIL ADDRES" 
//                                 type="text"
//                             />
//                             {errors.email && touched.email ? 
//                             setMensagemDeErroDoEmail(errors.email) : setMensagemDeErroDoEmail('')}
//                         </li>
//                         <li className="areaDoTexto">
//                             <Field
//                                 name="corpo" 
//                                 placeholder="MESSAGE:" 
//                                 component="textarea" 
//                                 rows="5"
//                             />
//                             {errors.corpo && touched.corpo ? 
//                             setMensagemDeErroDoCorpo(errors.corpo) : setMensagemDeErroDoCorpo('') }   
//                         </li>
//                         <li>
//                             <div className="flexivel">
//                                 <img src={enviar} alt="send" className="enviar"/>
//                                 <img src={anexo} alt="anexo" className="anexo"/>
//                             </div>
//                         </li>

//                     </Form>
//                 )}

//                 </Formik>

//             </ul>
//         </DivTelaEmailCelular>
//     );
// };

// export default TelaEmailCelular;