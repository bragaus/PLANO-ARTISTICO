import React, { createContext } from 'react';
import usarAutorizacao from './gancho/usarAutorizacao';

const Contexto = createContext();

function ProvedorDeAutorizacao({ children }) {
    const { 
        autenticado, 
        carregando, 
        lidarComLogin, 
        lidarComLogout,
    } = usarAutorizacao();

    return(
        <Contexto.Provider value={{ 
            autenticado, 
            carregando, 
            lidarComLogin, 
            lidarComLogout,
        }}>
            {children}
        </Contexto.Provider>
    );
    
}

export { Contexto, ProvedorDeAutorizacao }