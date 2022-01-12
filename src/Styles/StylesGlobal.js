import { createGlobalStyle } from 'styled-components'

//meus estilos globais
export const EstiloGlobal = createGlobalStyle`

  :root {
    --cor-fundo-header: #202024;
    --cor-fundo-header2:#11C9EE;
    --cor-fundo: #F3F4F6;
    --cor-fundo-outros: #FFFFFF;
    --cor-fundo-pedidos: #121214;

    --cor-texto-menu: #FFFFFF;
    --cor-icone-menu: #A5B4FC;

    --cor-texto: #6B7280;
    --cor-botao: #A5B4FC;
    --cor-botao-vermelho: #F5365C;

    --cor-linha: #726BEA

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1088px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--cor-fundo);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 8.6;
    cursor: not-allowed;
  }

  .styledOverlay {
    background: rgba(0, 0, 0, 0.5);;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .StyledModal {
    background: var(--cor-fundo-outros);
    max-width: 576px;
    background: var(--cor-fundo);
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;
  }


`