import { useNavigate } from "react-router-dom";
import { StyledButtons } from "../../global/styles";
import { NavStyled } from "./style";
import { useCookies } from "react-cookie";

function NavBar() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["user"]);
  function HandleLogout() {
    removeCookie(["user"]);
    navigate("/login");
  }

  return (
    <NavStyled>
      <StyledButtons onClick={() => HandleLogout()}>Sair</StyledButtons>
      <p>
        Seja bem-vindo(a): <span>{cookies.user.nome}</span>
      </p>
    </NavStyled>
  );
}

export default NavBar;
