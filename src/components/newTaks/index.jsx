import { useContext } from "react";
import { StyledButtons } from "../../global/styles";
import { ContainerButtons, ModalContainer, StyledModal } from "./styles";
import { Context } from "../../context/context";

function NewTaks() {
  const { modalOn, setModalOn } = useContext(Context);
  return (
    <StyledModal display={modalOn ? "flex" : "none"}>
      <ModalContainer>
        <textarea></textarea>

        <ContainerButtons>
          <StyledButtons onClick={() => setModalOn(false)}>
            Cancelar
          </StyledButtons>
          <StyledButtons>Criar</StyledButtons>
        </ContainerButtons>
      </ModalContainer>
    </StyledModal>
  );
}

export default NewTaks;
