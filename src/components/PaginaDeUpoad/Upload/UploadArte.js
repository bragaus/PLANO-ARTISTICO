import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Container } from './styles';

const ZonaDeDrop = ({ quandoInserirArte, mensagem, setFieldValue }) => {

    const { 
        acceptedFiles, 
        getRootProps, 
        getInputProps, 
        isDragActive, 
        isDragAccept, 
        isDragReject 
    } = useDropzone({

        accept: "image/jpeg, image/png",
        onDropAccepted: quandoInserirArte,
        onDrop: (acceptedFiles) => {
            setFieldValue("artes", acceptedFiles);
        },
        multiple: false,

    });

    const files = acceptedFiles.map(file => (

        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>

    ));  

    return (
        <>
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                <aside>
                    <ul>{files}</ul>
                </aside>                
                <p>{mensagem}</p>
            </Container>
        </>
    );   
}

export default ZonaDeDrop