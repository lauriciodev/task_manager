import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${(props) => props.display};
  transition: all 0.4s;
  justify-content: center;
  padding-top: 30px;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 700px;
  height: 120px;
  background-color: #14141c;
  border: 1px solid #33a4d4;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  align-items: center;

  textarea {
    resize: none;
    height: 100%;
    background-color: transparent;
    color: #32c870;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
