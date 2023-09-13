import { useNavigate } from "react-router-dom";
import { StyledButtons } from "../../global/styles";
import { NavStyled } from "./style";
import { parseCookies, destroyCookie } from "nookies";
import { useContext } from "react";
import { Context } from "../../context/context";
import { FaPlus } from "react-icons/fa";

function NavBar() {
  const { setModalOn } = useContext(Context);
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
      <StyledButtons onClick={() => setModalOn(true)}>
        <FaPlus />
      </StyledButtons>
    </NavStyled>
  );
}

export default NavBar;
