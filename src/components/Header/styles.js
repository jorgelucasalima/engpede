import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--cor-fundo-header);
  
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem 13rem;
  display: flex;
  align-items: center;
  

  a {
    

    text-decoration: none;
    color: var(--cor-texto-menu);
    font-size: 25px;
    transition: color 0.2s;

    margin: 1rem;
    padding: 0.5rem;

  }

  button { 
    font-size: 1rem;
    color: #FFFFFF;
    background: var(--cor-botao-vermelho);
    border: 0;
    padding: 0 3rem;
    border-radius: 0.25rem;
    height:3rem;

    margin-left: 25rem;
    margin-top: 4rem;


    
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
    
  }
  
`