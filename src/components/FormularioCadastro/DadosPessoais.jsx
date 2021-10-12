import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel, FormGroup } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
function DadosPessoais({ aoEnviar }) {

    // meus hooks
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" },nome: { valido: true, texto: "" } })

    const validacoes = useContext(ValidacoesCadastro)
    
    function validarCampos(e) {
        console.log(e.target)
        const { name, value } = e.target;
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }

        }
        return true;
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes })
            }
        }}>
            <TextField
                value={nome}
                onChange={
                    (e) => {
                        setNome(e.target.value)
                    }}
                onBlur={validarCampos}
                name="nome" error={!erros.nome.valido}
                helperText={erros.nome.texto}
                variant="outlined" id="nome" label="Nome" margin="normal" fullWidth />
            <TextField
                value={sobrenome}
                onChange={
                    (e) => {
                        setSobrenome(e.target.value)
                    }} variant="outlined" id="sobrenome" label="Sobrenome" margin="normal" fullWidth />
            <TextField
                value={cpf}
                onChange={
                    (e) => {
                        setCpf(e.target.value)
                    }}
                name="cpf"
                onBlur={validarCampos}
                variant="outlined" margin="normal" fullWidth id="cpf" label="CPF" error={!erros.cpf.valido} helperText={erros.cpf.texto} />

            <FormGroup>
                <FormControlLabel checked={promocoes} onChange={(e) => {
                    setPromocoes(e.target.checked)
                }} control={<Switch defaultChecked={promocoes} />} label="Promoções" />
            </FormGroup>
            <FormGroup>
                <FormControlLabel checked={novidades} onChange={(e) => {
                    setNovidades(e.target.checked)
                }} control={<Switch defaultChecked={novidades} />} label="Novidades" />
            </FormGroup>
            <Button type="submit" variant="contained" color="primary">Próximo</Button>

        </form>
    )
}

export default DadosPessoais;