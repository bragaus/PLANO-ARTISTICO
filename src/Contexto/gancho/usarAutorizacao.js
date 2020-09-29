import { useState, useEffect } from 'react';
import api from '../../services/api';
import history from '../../history';
import jwt from 'jsonwebtoken';

export default function useAuth() {

    // Esse estado é usado nas rotas para redirecionar o usuário
    // para a rota privada se estiver autenticado ou redirecionar 
    // para o login se não estiver autenticado e tentar acessar a rota privada
    const [ autenticado, setAutenticado ] = useState(false);

    // Esse estado é usado para retornar o loading na tela do usuário 
    // enquanto verifica se o usuário está autenticado ou não
    const [ carregando, setCarregando ] = useState(true);

    // Usado para verificar se o usuario está autenticado quando carregar 
    // a página, se estiver é carregado true em autenticado
    useEffect(() => {
        const token = localStorage.getItem('token'); 

        if(token) {
            // Verificando autenticidade do token
            jwt.verify(token, process.env.REACT_APP_KEY, (err) => {
                if(err) {
                    console.log(err);
                    return JSON.stringify(err)
                } else {
                    api.defaults.headers.Authorization = `Bearer ${token}`            
                    setAutenticado(true);
                }
            })

        }

        setCarregando(false);
    }, []);

    // Função que recebe os dados enviados no login e verifica se o status
    // recebido da requisição post é 200 para inserir o token no localStorage
    // seta autenticado como true para destravar o redirecionamento para a rota privada
    // e depois redireciona para a rota postar_arte
    async function lidarComLogin(post) {

        // Desestruturando a resposta do login na constante token e status
        const { 
            data: { token },
            status 
        } = await api.post('/login', post, { withCredentials: true })
        
        // Se o login for bem sucedido
        if (status === 200) {
            localStorage.setItem('token', token);

            // Insere o token no cabeçalho das requisções
            api.defaults.headers.Authorization = `Bearer ${token}`;
            
            setAutenticado(true);
            history.push('/postar_arte');
        } else {
            console.log('teste')
        };
    };

    // Função que retira o token do localStorage
    function lidarComLogout() {
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined
        setAutenticado(false);        
        history.push('/');
    };

    return { autenticado, carregando, lidarComLogin, lidarComLogout }
};