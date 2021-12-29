import { createGlobalStyle } from 'styled-components'

//meus estilos globais
export const EstiloGlobal = createGlobalStyle`

  :root {
    --cor-fundo-header: #4F46E5;
    --cor-fundo: #F3F4F6;
    --cor-fundo-outros: #FFFFFF;

    --cor-texto-menu: #FFFFFF;
    --cor-icone-menu: #A5B4FC;

    --cor-texto: #6B7280;
    --cor-botao: #A5B4FC;

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
    background: var(--cordefundo);
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
  


`