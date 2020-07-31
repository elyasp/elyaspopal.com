import styled from "styled-components";

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
  max-height: 50%;
  padding: 3em 0;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    font-family: "Poppins";
    color: white;
    font-weight: 200;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  }

  h2 {
    font-size: 2em;
  }

  h5 {
    font-size: 1.1em;
    margin: 0;
  }
`;

export const FormGroup = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: space-between;
  padding: 0.5em;
  color: white;

  input {
    height: 3em;
    padding: 0 1em;
    margin: 0.5em 0;
    border: none;
    outline: none;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  }

  textarea {
    padding: 1em;
    margin: 0.5em 0;
    border: none;
    outline: none;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  }

  p {
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 200;
    color: white;
    background-color: #3c53c7;
    transition: 500ms;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border: none;
    outline: none;
    padding: 0.7em 1.2em;

    &:hover {
      border-top-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      cursor: pointer;
    }
  }
`;
