import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })

    const validacoes = useContext(ValidacoesCadastro)
    function validarCampos(e) {
        console.log(e.target)
        const { name, value } = e.target;
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }
    
    function possoEnviar(){
        for(let campo in erros){
            if (!erros[campo].valido){
                return false;
            }
            
        }
        return true;
    }

    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                name="email"
                variant="outlined" required margin="normal" fullWidth id="email" type="email" label="E-mail" />
            <TextField
                value={senha}
                onChange={(e) => {
                    setSenha(e.target.value)
                }}
                onBlur={validarCampos}
                name="senha"
                variant="outlined" required margin="normal" fullWidth id="password" type="password" label="Senha" error={!erros.senha.valido} helperText={erros.senha.texto} />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}

export default DadosUsuario;