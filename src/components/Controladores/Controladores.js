import React from 'react';
import api from '../../services/api';
import { Controlador } from './estilo';

const Controladores = ({ id_daArte, tipo, arte, setArte, auxiliar, setAuxiliar }) => {

    // Funções para movimentação das artes
    function moverArteParaEsquerda(id_daArte, tipo) {
        if (tipo === 'Ilustracao') {
            arte.forEach(ilustracao => {
                if (ilustracao.ID === id_daArte) {
                    console.log(ilustracao.titulo)
                    ilustracao.esquerda = ilustracao.esquerda + 5
                }
            });
        } else if (tipo === 'ArteDeCapa') {
            arte.forEach(arteDeCapa => {
                if (arteDeCapa.ID === id_daArte) {
                    arteDeCapa.esquerda = arteDeCapa.esquerda + 5
                }
            });            
        } else if (tipo === 'Colagem') {
            arte.forEach(colagem => {
                if (colagem.ID === id_daArte) {
                    colagem.esquerda = colagem.esquerda + 5
                }
            });            
        }
        setAuxiliar(auxiliar + 1);        
    };

    function moverArteParaDireita(id_daArte, tipo) {
        if (tipo === 'Ilustracao') {        
            arte.forEach(ilustracao => {
                if (ilustracao.ID === id_daArte) {
                    ilustracao.esquerda = ilustracao.esquerda - 5
                }
            });
        } else if (tipo === 'ArteDeCapa') {
            arte.forEach(arteDeCapa => {
                if (arteDeCapa.ID === id_daArte) {
                    arteDeCapa.esquerda = arteDeCapa.esquerda - 5
                }
            });            
        } else if (tipo === 'Colagem') {
            arte.forEach(colagem => {
                if (colagem.ID === id_daArte) {
                    colagem.esquerda = colagem.esquerda - 5
                }
            });            
        }
        setAuxiliar(auxiliar + 1);
    };
    
    function moverArteParaBaixo(id_daArte, tipo) {
        if (tipo === 'Ilustracao') {        
            arte.forEach(ilustracao => {
                if (ilustracao.ID === id_daArte) {
                    ilustracao.baixo = ilustracao.baixo + 5
                }
            });
        } else if (tipo === 'ArteDeCapa') {
            arte.forEach(arteDeCapa => {
                if (arteDeCapa.ID === id_daArte) {
                    arteDeCapa.baixo = arteDeCapa.baixo + 5
                }
            });            
        } else if (tipo === 'Colagem') {
            arte.forEach(colagem => {
                if (colagem.ID === id_daArte) {
                    colagem.baixo = colagem.baixo + 5
                }
            });            
        }
        setAuxiliar(auxiliar + 1);        
    };

    function moverArteParaCima(id_daArte, tipo) {
        if (tipo === 'Ilustracao') {    
            arte.forEach(ilustracao => {
                if (ilustracao.ID === id_daArte) {
                    ilustracao.baixo = ilustracao.baixo - 5
                }
            });
        } else if (tipo === 'ArteDeCapa') {
            arte.forEach(arteDeCapa => {
                if (arteDeCapa.ID === id_daArte) {
                    arteDeCapa.baixo = arteDeCapa.baixo - 5
                }
            });            
        } else if (tipo === 'Colagem') {
            arte.forEach(colagem => {
                if (colagem.ID === id_daArte) {
                    colagem.baixo = colagem.baixo - 5
                }
            });            
        }
        setAuxiliar(auxiliar + 1);        
    };

    function aumentar(id_daArte, tipo) {
        if (tipo === 'Ilustracao') {        
            arte.forEach(ilustracao => {
                if (ilustracao.ID === id_daArte) {
                    ilustracao.largura = ilustracao.largura + 5
                }
            });
        } else if (tipo === 'ArteDeCapa') {
            arte.forEach(arteDeCapa => {
                if (arteDeCapa.ID === id_daArte) {
                    arteDeCapa.largura = arteDeCapa.largura + 5
                }
            });            
        } else if (tipo === 'Colagem') {
            arte.forEach(colagem => {
                if (colagem.ID === id_daArte) {
                    colagem.largura = colagem.largura + 5
                }
            });            
        }
        setAuxiliar(auxiliar + 1);        
    };
    
    function diminuir(id_daArte, tipo) {
        if (tipo === 'Ilustracao') {        
            arte.forEach(ilustracao => {
                if (ilustracao.ID === id_daArte) {
                    ilustracao.largura = ilustracao.largura - 5
                }
            });
        } else if (tipo === 'ArteDeCapa') {
            arte.forEach(arteDeCapa => {
                if (arteDeCapa.ID === id_daArte) {
                    arteDeCapa.largura = arteDeCapa.largura - 5
                }
            });            
        } else if (tipo === 'Colagem') {
            arte.forEach(colagem => {
                if (colagem.ID === id_daArte) {
                    colagem.largura = colagem.largura - 5
                }
            });            
        }
        setAuxiliar(auxiliar + 1);        
    };     

    // Função que chama api de deleção da arte do banco de dados e da amazon
    async function deletarArte(ID_daArte, tipo) {
        await api.delete(`/deletarArte/${ID_daArte}`);

        // Retirar arte exluida da pagina em tempo de execução
        if (tipo === 'Ilustracao') {
            setArte(arte.filter(artes => artes.ID !== ID_daArte))
        } else if (tipo === 'ArteDeCapa') {
            setArte(arte.filter(artes => artes.ID !== ID_daArte))            
        } else if (tipo === 'Colagem') {
            setArte(arte.filter(artes => artes.ID !== ID_daArte))            
        }
    };    

    // Botões responsaveis por receber o id e o tipo e chamar as funções a cima
    return(
        <>
            <Controlador onClick={() => deletarArte(id_daArte, tipo)}>Deletar Arte</Controlador>
            <Controlador onClick={() => moverArteParaDireita(id_daArte, tipo)}>&larr;</Controlador>                        
            <Controlador onClick={() => moverArteParaEsquerda(id_daArte, tipo)}>&rarr;</Controlador>
            <Controlador onClick={() => moverArteParaBaixo(id_daArte, tipo)}>&darr;</Controlador>
            <Controlador onClick={() => moverArteParaCima(id_daArte, tipo)}>&uarr;</Controlador>
            <Controlador onClick={() => aumentar(id_daArte, tipo)}>zin</Controlador> 
            <Controlador onClick={() => diminuir(id_daArte, tipo)}>zout</Controlador> 
        </>            
    )

}

export default Controladores;