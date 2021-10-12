import './App.css';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto/400.css';

import { validarCPF, validarSenha } from './models/Cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {

  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1">
          Formulário Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviar} />

        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviar(dados) {
  console.log(dados)
}

export default App;
