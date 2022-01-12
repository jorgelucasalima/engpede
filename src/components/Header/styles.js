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

export const ContainerModal = styled.form`

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 20px;
    
    &::placeholder {
      color: var(--texto-body);
    }

    & + input {
      margin-top: 0.7rem;
    }
  }
  
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--cor-botao-vermelho);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    
    transition:filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  

`