import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Figure } from './styles';

const ZonaDeDrop = ({ quandoInserirArte, mensagem, setFieldValue }) => {

    const [files, setFiles] = useState ([]);

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
      }, [files]);    

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
            setFieldValue("arquivo", acceptedFiles);
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        multiple: false,

    });

    const thumbs = files.map(({ name, preview }) => (
        <Figure key={name}>
            <img src={preview} alt={name} />
        </Figure>
    ));    


    return (
        <>
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />

                {files.length === 0 && (
                    <p>{mensagem}</p>
                )}           

                {thumbs}
            </Container>
        </>
    );   
}

export default ZonaDeDrop