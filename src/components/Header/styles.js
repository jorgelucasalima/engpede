import styled from 'styled-components';

export const Container = styled.header`

  background-color: var(--cor-fundo-header);
  color: var(--cor-texto-menu);
  padding: 100px;
  margin: 0px;

`

export const Content = styled.div`
  padding: 20px;

  svg {
    color: var(--cor-icone-menu);
  }

  hr {
    border: 1px solid var(--cor-linha);
  }

  a {
    color: var(--cor-texto-menu);
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
    margin: 0 10px;
    transition: all 0.2s;
    
  }




`