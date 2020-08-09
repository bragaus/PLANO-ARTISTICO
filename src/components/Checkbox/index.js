import React from 'react';
import { Field } from "formik";

export default function Checkbox({ tipo, tipoDaArte }) {
    return (

        <Field name={tipo}>
            {({ field, form }) => (

                <label>
                    <input
                        type="radio"
                        checked={field.value.includes(tipoDaArte)}
                        onChange={() => {

                            const tipoSelecionado = tipoDaArte;
                            form.setFieldValue(tipo, tipoSelecionado);

                        }}                       
                    />
                    
                    {tipoDaArte}

                </label>

            )}
        </Field>

    );
}