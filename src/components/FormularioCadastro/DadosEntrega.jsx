import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form action="" onSubmit={
            (e) => {
                e.preventDefault();
                aoEnviar({cep, endereco, numero, estado, cidade})
            }
        }>
            <TextField
                value={cep}
                onChange={(e) => {
                    setCep(e.target.value)
                }}
                variant="outlined" margin="normal" id="cep" type="number" label="Cep" />
            <TextField
                value={endereco}
                onChange={(e) => {
                    setEndereco(e.target.value)
                }}
                variant="outlined" margin="normal" fullWidth id="endereco" type="text" label="Endereço" />
            <TextField
                value={numero}
                onChange={(e) => {
                    setNumero(e.target.value)
                }}
                variant="outlined" margin="normal" id="numero" type="number" label="Número" />
            <TextField 
                value={estado}
                onChange={(e) => {
                    setEstado(e.target.value)
                }}
                variant="outlined" margin="normal" id="estado" type="text" label="Estado" />
            <TextField 
                value={cidade}
                onChange={(e) => {
                    setCidade(e.target.value)
                }}
                variant="outlined" margin="normal" id="cidade" type="text" label="Cidade" />

            <Button type="submit" variant="contained" fullWidth color="primary">Finalizar Cadastro</Button>
        </form>
    )
}

export default DadosEntrega;