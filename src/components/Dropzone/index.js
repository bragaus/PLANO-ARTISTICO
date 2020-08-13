import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Figure } from './styles';

const Dropzone = ({ quandoinserirarte, mensagem, setfieldvalue }) => {

    const [preview, setPreview] = useState([]);

    useEffect(() => () => {
        preview.forEach(file => URL.revokeObjectURL(file.preview));
    }, [preview]);

    const { 
        acceptedFiles, 
        getRootProps, 
        getInputProps, 
        isDragActive, 
        isDragAccept, 
        isDragReject 
    } = useDropzone({

        accept: "image/jpeg, image/png",
        onDropAccepted: (acceptedFiles) => {

            quandoinserirarte(acceptedFiles);
            setfieldvalue("arquivo", acceptedFiles);
            
            setPreview(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));

        },


        multiple: false,

    });

    const thumbs = preview.map(({ name, preview }) => (
        <Figure key={name}>
            <img src={preview} alt={name} />
        </Figure>
    ));

    return (
        <>
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />

                {preview.length === 0 && (
                    <p>{mensagem}</p>
                )}           

                {thumbs}
            </Container>
        </>
    );   
}

export default Dropzone