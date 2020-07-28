import React from 'react';
import { Container } from './estilo';
import api from '../../services/api';

export const DeletarArte = ({ id, tipo, setArte, arte, setConfirmacaoParaDeletar }) => {

    // Função que chama api de deleção da arte do banco de dados e da amazon
    async function deletarArte(id, tipo) {
        
        setConfirmacaoParaDeletar(false)
        await api.delete(`/deletarArte/${id}`);

        // Retirar arte exluida da pagina em tempo de execução
        if (tipo === 'Ilustracao') {
            setArte(arte.filter(artes => artes.ID !== id))
        } else if (tipo === 'ArteDeCapa') {
            setArte(arte.filter(artes => artes.ID !== id))            
        } else if (tipo === 'Colagem') {
            setArte(arte.filter(artes => artes.ID !== id))            
        }
    };    

    return (
        <section>
            <Container>
                <h1>are you sure you want to delete? </h1>
                <div>                
                    <button onClick={() => deletarArte(id, tipo)}>YES</button>
                    <button onClick={() => setConfirmacaoParaDeletar(false)}>NO</button>
                </div>
            </Container>
        </section>
    );

}

export default DeletarArte;