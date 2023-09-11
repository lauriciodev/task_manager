import styled from "styled-components";

export const ContainerTasks = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 460px) {
    padding: 0px 40px;
  }
`;

export const SubContainerTasks = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
`;

export const StyledTasks = styled.div`
  border-radius: 5px;
  display: flex;
  width: 100%;
  box-shadow: 1px 1px 3px #32c98840;
  border: 1px solid #32c98840;
  transition: all 0.4s;
  align-items: center;
  padding: 0px 4px;

  &:hover {
    box-shadow: 1px 1px 3px #32c980;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 5px;
  width: 100%;
  padding: 0px 5px;

  p {
    width: 100%;
    text-align: left;
  }
`;
