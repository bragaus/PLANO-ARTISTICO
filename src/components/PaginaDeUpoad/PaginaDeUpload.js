import React,{ useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import ZonaDeDrop from './Upload/UploadArte';
import Checkbox from './Upload/CheckBox';
import * as Yup from 'yup';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

/** Pendências: 
 * Fazer percentual de upload para quando upar arte frente e verso
 * Esse estado serve para mostrar o percentual de upload da arte única
 * const [progresso, setProgresso] = useState(0);
 * 
 * Limpar os campos de upload automaticamente depois que as artes forem upadas
 */

const PainelDeControle = () => {

    // Esse estado serve para receber as artes inseridas na zona de upload
    const [conjuntoArtes, setConjuntoArtes] = useState([]);

    // Esse estado serve para informar se é frente e verso ou arte única
    const [frenteVerso, setFrenteVerso] = useState(false);

    // Esse estado recebe o status de upload da arte
    const [respostaDoUpload, setRespostaDoUpload] = useState(0);

    // Esse estado recebe os erros caso aconteça
    const [erro, setErro] = useState('');

    // Esse estado é temporario, serve para mostrar carregando enquanto está fazendo
    // o upload de multiplas artes (enquanto não resolvo como fazer o percentual de multiplas artes)
    const [carregando, setCarregando] = useState(false);

    // usado para excluir o token do localstorage fazendo assim o log out
    const { lidarComLogout } = useContext(Contexto);

    // inserir as artes no estado conjutoArtes
    function lidarComArteInseridaNaZonaDeDrop(artes) {
        artes.forEach(arte => {
            // inserir arte frente e verso
            if (frenteVerso) {
                setConjuntoArtes([...conjuntoArtes, arte])
            // se a arte não for frente e verso, vai inserir apenas uma arte no conjuntoArtes 
            } else {
                setConjuntoArtes([arte])
            }          
        })
    }

    // limpar artes upadas caso seja selecionado ou desselecionado opção frente verso
    function checkFrenteVerso() {
        setConjuntoArtes([])
        setFrenteVerso(!frenteVerso)
    }

    // enviar arte para a rota que faz upload no CDN e inserção dos registros no banco de dados
    const enviarArteParaBackend = (post, { resetForm }) => {

        var formulario = new FormData();

        // inserir cada arte upada no formulário
        conjuntoArtes.forEach((arquivo) => {
            formulario.append('file', arquivo);
        });          
        
        // inserir as informações da arte no formulário 
        formulario.append('titulo', post.titulo);
        formulario.append('desc', post.desc);
        formulario.append('tipo', post.tipo);

        if (frenteVerso) {
            // Para mostrar carregando enquanto faz o upload
            setCarregando(true)

            // Enviando a arte e quando receber a resposta, vai parar de mostrar
            // carregando e vai guardar o status do upload
            api.post('/postarArteFrenteVerso', formulario)
            .then((resposta) => {
                setCarregando(false);
                setRespostaDoUpload(resposta.status);
            })
            .catch((erro) => {
                console.log(erro)
                setCarregando(false);
                setErro(erro)
            });

        } else {

            // Para mostrar carregando enquanto faz o upload
            setCarregando(true)            

            // Enviando a arte, fazendo o percentual de upload e recebendo o status do upload
            api.post('/postarArte', formulario)
            .then((resposta) => {
                setCarregando(false);
                setRespostaDoUpload(resposta.status);
            })
            .catch((erro) => {
                console.log(erro)
                setCarregando(false);
                setErro(erro)
            });

            // Pendência:
            // Para fazer o percentual de upload
            // ,{
            //     onUploadProgress: progresso => {
            //         var percentual = Math.round(progresso.loaded * 100 / progresso.total);
            //         setProgresso(percentual);
            // }}            
        }

        resetForm({})
        setConjuntoArtes([])

    }

    // Validação das entradas
    const EsquemaDeValidacao = Yup.object().shape({
        titulo: Yup.string().max(30, "Too Long!").required('Required'),
        desc: Yup.string().max(500, "Too Long!").required('descrição obrigatoria'),
        tipo: Yup.string().required('Required'),
        artes: Yup.array().required('Arte').min(1).max(1),
        arteFrenteVeso: Yup.boolean()
    })    

    const camposDoFormulario = {
        titulo: '',  desc: '', tipo: '', arteFrenteVeso: false, artes: []
    }

    return (
        <>
        <Formik 
            initialValues = { camposDoFormulario }
            validationSchema = { EsquemaDeValidacao } 
            onSubmit = { enviarArteParaBackend }
        >

        {({ handleSubmit, errors, touched, setFieldValue }) => (

            <Form onSubmit={handleSubmit}>

                <Field name="titulo" placeholder="Artwork title" type="text" />
                {errors.titulo && touched.titulo ? (
                    <div>{errors.titulo}</div>
                ) : null }

                <Field name="desc" placeholder="Artowrk description" type="text" />
                {errors.desc && touched.desc ? (
                    <div>{errors.desc}</div>
                ) : null }                

                <Field name="arteFrenteVeso" type="checkbox" onClick={checkFrenteVerso} />   

                { frenteVerso && (
                    <>
                        <ZonaDeDrop
                            quandoInserirArte={lidarComArteInseridaNaZonaDeDrop}
                            setFieldValue={setFieldValue}                            
                            mensagem="Upload Preview Image"
                        />
                        <ZonaDeDrop 
                            quandoInserirArte={lidarComArteInseridaNaZonaDeDrop}
                            setFieldValue={setFieldValue}                            
                            mensagem="Upload Front Image" 
                        />
                        <ZonaDeDrop 
                            quandoInserirArte={lidarComArteInseridaNaZonaDeDrop}
                            setFieldValue={setFieldValue}                            
                            mensagem="Upload Back Image" 
                        />                        
                    </>
                ) }

                { !frenteVerso && (
                    <ZonaDeDrop 
                        quandoInserirArte={lidarComArteInseridaNaZonaDeDrop}
                        setFieldValue={setFieldValue}
                        mensagem="Upload Artwork"
                    />
                ) }

                {errors.artes && touched.artes ? (
                    <div>{errors.artes}</div>
                ) : null }              

                <Checkbox tipo="tipo" tipoDaArte="Collage" />
                <Checkbox tipo="tipo" tipoDaArte="Illustration" />
                <Checkbox tipo="tipo" tipoDaArte="Cover" />

                {errors.tipo && touched.tipo ? (
                    <div>{errors.tipo}</div>
                ) : null }                

                <button type="submit" > Submit </button>

            </Form>

        )}

        </Formik>


        <Link to='/'> Voltar</Link>
        <button type="submit" onClick={lidarComLogout}> Sair </button>

        {carregando && <h1>Carregando...</h1>}
        {respostaDoUpload === 200 && <h1>success upload</h1>}
        {erro && <h1>Erro ao fazer upload, tente novamente</h1>}
        {/* {progresso !== 0 && <h1>{progresso}%</h1>} */}
        </>
    );

}

export default PainelDeControle;
