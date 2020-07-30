import React, { useState } from 'react';
import DeletarArte from './DeletarArte';

import { 
    Section, 
    Lista,
    LupaAumentar,
    LupaDiminuir,
    SetaEsquerda,
    SetaDireita,
    SetaBaixo,
    SetaCima,
    Lixeira   
} from './estilo';

export function zIndex(id_daArte, tipo, arte, setAuxiliar, auxiliar) {
    if (tipo === 'Ilustracao') {        
        arte.forEach(ilustracao => {
            if (ilustracao.ID === id_daArte) {
                ilustracao.zIndex = ilustracao.zIndex + 1
            }
        });
    } else if (tipo === 'ArteDeCapa') {
        arte.forEach(arteDeCapa => {
            if (arteDeCapa.ID === id_daArte) {
                arteDeCapa.zIndex = arteDeCapa.zIndex + 1
            }
        });            
    } else if (tipo === 'Colagem') {
        arte.forEach(colagem => {
            if (colagem.ID === id_daArte) {
                colagem.zIndex = colagem.zIndex + 1
            }
        });            
    }
    setAuxiliar(auxiliar + 1);        
};

const Controladores = ({ id_daArte, tipo, arte, setArte, auxiliar, setAuxiliar }) => {

    // Funções para movimentação das artes
    
    function moverArteParaDireita(id_daArte, tipo) {
        if (tipo === 'Ilustracao') {
            arte.forEach(ilustracao => {
                if (ilustracao.ID === id_daArte) {
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

    function moverArteParaEsquerda(id_daArte, tipo) {
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

    const [ confirmacaoParaDeletar, setConfirmacaoParaDeletar ] = useState(false);

    // Botões responsaveis por receber o id e o tipo e chamar as funções a cima
    return(<>
        <Section>
            <Lista>
                <li onClick={() => setConfirmacaoParaDeletar(true)}>
                    <Lixeira />
                </li>

                <li onClick={() => moverArteParaEsquerda(id_daArte, tipo)}>
                    <SetaEsquerda />
                </li>                

                <li onClick={() => moverArteParaDireita(id_daArte, tipo)}>
                    <SetaDireita />
                </li>

                <li onClick={() => moverArteParaBaixo(id_daArte, tipo)}>
                    <SetaBaixo />
                </li>

                <li onClick={() => moverArteParaCima(id_daArte, tipo)}>
                    <SetaCima />
                </li>

                <li onClick={() => aumentar(id_daArte, tipo)}>
                    <LupaAumentar/>
                </li>

                <li onClick={() => diminuir(id_daArte, tipo)}>
                    <LupaDiminuir />
                </li>
            </Lista>
        </Section>

        {confirmacaoParaDeletar && (
            <DeletarArte 
                id={id_daArte} 
                tipo={tipo}
                setArte={setArte}
                arte={arte}
                setConfirmacaoParaDeletar={setConfirmacaoParaDeletar}
            />
        )} 

    </>)
}

export default Controladores;