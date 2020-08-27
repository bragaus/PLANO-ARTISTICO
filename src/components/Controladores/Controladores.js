import React, { useState, useEffect } from 'react';
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
    Lixeira,
    DivInput 
} from './estilo';

export function zIndex(id_daArte, artes, setArtes, artesModificadas, setArtesModificadas) {

    const moverArte = artes.map(arte => {
        if(arte.ID === id_daArte) {
            console.log(arte.zIndex)
            arte.zIndex = arte.zIndex + 1
        }
        return arte;
    });

    setArtes(moverArte);

    if (artesModificadas.filter(e => e.ID === id_daArte).length < 1) {
        setArtesModificadas([...artesModificadas, artes.filter(arte => arte.ID === id_daArte)[0]])
    }
}

const Controladores = ({ id_daArte, tipo, arte, setArte, artesModificadas, setArtesModificadas, titulo, descricao }) => {
    
    const [novoTitulo, setNovoTitulo] = useState('');
    const [novaDesc, setNovaDesc] = useState('');

    const lidarComTituloOuDescricao = () => {
        const moverArte = arte.map(arte => {
            if(arte.ID === id_daArte) {
                if (novoTitulo) arte.titulo = novoTitulo
                if (novaDesc) arte.descricao = novaDesc
            }
            return arte;
        });

        setArte(moverArte);

        if (artesModificadas.filter(e => e.ID === id_daArte).length < 1) {
            setArtesModificadas([...artesModificadas, arte.filter(arte => arte.ID === id_daArte)[0]])
        }        
    }

    function moverArteParaEsquerda(id_daArte) {

        const moverArte = arte.map(arte => {
            if(arte.ID === id_daArte) {
                arte.esquerda = arte.esquerda - 5
            }
            return arte;
        });

        setArte(moverArte);

        if (artesModificadas.filter(e => e.ID === id_daArte).length < 1) {
            setArtesModificadas([...artesModificadas, arte.filter(arte => arte.ID === id_daArte)[0]])
        }

    };

    function moverArteParaDireita(id_daArte) {

        const moverArte = arte.map(arte => {
            if(arte.ID === id_daArte) {
                arte.esquerda = arte.esquerda + 5
            }
            return arte;
        });

        setArte(moverArte);

        if (artesModificadas.filter(e => e.ID === id_daArte).length < 1) {
            setArtesModificadas([...artesModificadas, arte.filter(arte => arte.ID === id_daArte)[0]])
        }        
    };

    function moverArteParaBaixo(id_daArte) {

        const moverArte = arte.map(arte => {
            if(arte.ID === id_daArte) {
                arte.baixo = arte.baixo + 5
            }
            return arte;
        });

        setArte(moverArte);

        if (artesModificadas.filter(e => e.ID === id_daArte).length < 1) {
            setArtesModificadas([...artesModificadas, arte.filter(arte => arte.ID === id_daArte)[0]])
        }        
    };
    
    function moverArteParaCima(id_daArte) {

        const moverArte = arte.map(arte => {
            if(arte.ID === id_daArte) {
                arte.baixo = arte.baixo - 5
            }
            return arte;
        });

        setArte(moverArte);

        if (artesModificadas.filter(e => e.ID === id_daArte).length < 1) {
            setArtesModificadas([...artesModificadas, arte.filter(arte => arte.ID === id_daArte)[0]])
        }        
    };
    
    function aumentar(id_daArte) {

        const moverArte = arte.map(arte => {
            if(arte.ID === id_daArte) {
                arte.largura = arte.largura + 5
            }
            return arte;
        });

        setArte(moverArte);

        if (artesModificadas.filter(e => e.ID === id_daArte).length < 1) {
            setArtesModificadas([...artesModificadas, arte.filter(arte => arte.ID === id_daArte)[0]])
        }        
    };
    
    function diminuir(id_daArte) {

        const moverArte = arte.map(arte => {
            if(arte.ID === id_daArte) {
                arte.largura = arte.largura - 5
            }
            return arte;
        });

        setArte(moverArte);

        if (artesModificadas.filter(e => e.ID === id_daArte).length < 1) {
            setArtesModificadas([...artesModificadas, arte.filter(arte => arte.ID === id_daArte)[0]])
        }        
    };

    const [ confirmacaoParaDeletar, setConfirmacaoParaDeletar ] = useState(false);

    // Botões responsaveis por receber o id e o tipo e chamar as funções a cima
    return(<>

        {!confirmacaoParaDeletar && (
            <DivInput>
                <input type="text" placeholder={titulo} onChange={(e) => setNovoTitulo(e.target.value)}/>
                <textarea type="text" placeholder={descricao || 'enter desc'} onChange={(e) => setNovaDesc(e.target.value)}/>
                <button onClick={lidarComTituloOuDescricao}>OK</button>
            </DivInput>
        )}


        <Section>
            <Lista>
                <li onClick={() => setConfirmacaoParaDeletar(true)}>
                    <Lixeira />
                </li>

                <li onClick={() => moverArteParaEsquerda(id_daArte)}>
                    <SetaEsquerda />
                </li>                

                <li onClick={() => moverArteParaDireita(id_daArte)}>
                    <SetaDireita />
                </li>

                <li onClick={() => moverArteParaBaixo(id_daArte)}>
                    <SetaBaixo />
                </li>

                <li onClick={() => moverArteParaCima(id_daArte)}>
                    <SetaCima />
                </li>

                <li onClick={() => aumentar(id_daArte)}>
                    <LupaAumentar/>
                </li>

                <li onClick={() => diminuir(id_daArte)}>
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

    </>);
}

export default Controladores;