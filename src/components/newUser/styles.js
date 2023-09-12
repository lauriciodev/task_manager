import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 460px) {
    padding: 0px 10px;
  }
`;

export const ContainerForm = styled.form`
  width: 100%;
  max-width: 400px;
  border: 1px solid #32c988;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 1px 1px 3px #72c988;
`;
export const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  height: 30px;
  border: 0px;
  font-size: 12px;
  color: #72c988;
  background-color: transparent;
  border-radius: 4px;
  border-bottom: 1px solid #72c988;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #72c988;
    background-color: transparent;
  }
`;

export const ContainerButtons = styled.div`
  padding: 10px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    color: white;
  }
`;
