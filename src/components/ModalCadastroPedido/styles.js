import styled from "styled-components";

export const Container = styled.form`
  
  h2 {
    font-size: 27px;
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
    font-size: 1.5rem;

  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--verde);
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

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition:filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

`
