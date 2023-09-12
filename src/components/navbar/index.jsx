import { useNavigate } from "react-router-dom";
import { StyledButtons } from "../../global/styles";
import { NavStyled } from "./style";

function NavBar() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("user"));
  function HandleLogout() {
    localStorage.setItem("token", JSON.stringify(""));
    navigate("/login");
  }

  return (
    <NavStyled>
      <StyledButtons onClick={() => HandleLogout()}>Sair</StyledButtons>
      <p>
        Seja bem-vindo(a): <span>{usuario.nome}</span>
      </p>
    </NavStyled>
  );
}

export default NavBar;
