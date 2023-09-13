import { useNavigate } from "react-router-dom";
import { StyledButtons } from "../../global/styles";
import { NavStyled } from "./style";
import { parseCookies, destroyCookie } from "nookies";

function NavBar() {
  const navigate = useNavigate();
  const { ["userNome"]: nome } = parseCookies();

  function HandleLogout() {
    destroyCookie(null, ["userToken"]);
    destroyCookie(null, ["userId"]);
    destroyCookie(null, ["userNome"]);
    navigate("/login");
  }

  return (
    <NavStyled>
      <StyledButtons onClick={() => HandleLogout()}>Sair</StyledButtons>
      <p>
        Seja bem-vindo(a): <span>{nome}</span>
      </p>
    </NavStyled>
  );
}

export default NavBar;
