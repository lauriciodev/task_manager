import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100%;
  border-bottom: 1px solid #33a4d4;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  button {
    margin-left: 30px;
  }
  p {
    color: #33a4d4;

    span {
      color: white;
      text-transform: capitalize;
    }
  }
`;
