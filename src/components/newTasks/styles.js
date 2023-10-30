import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: #14141ccf;
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${(props) => props.display};
  transition: all 0.4s;
  justify-content: center;
  padding-top: 30px;
`;

export const ModalContainer = styled.div`
   background-color: #172534;
  position:absolute;
  top:100px;
  height:150px;
  width:100%;
  max-width:400px;
  border-radius:10px;
  padding:5px;
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items:center;

  textarea {
  height:120px;
    background-color: transparent;
    color: #32c870;
    border-radius: 10px;
    border:1px solid #32c98840 ;
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
