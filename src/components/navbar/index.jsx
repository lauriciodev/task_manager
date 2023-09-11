import { useNavigate } from "react-router-dom";
import { StyledButtons } from "../../global/styles";
import { NavStyled } from "./style";

function NavBar() {
  const navigate = useNavigate();
  function HandleLogout() {
    localStorage.setItem("token", JSON.stringify(""));
    navigate("/login");
  }

  return (
    <NavStyled>
      <StyledButtons onClick={() => HandleLogout()}>Sair</StyledButtons>
    </NavStyled>
  );
}

export default NavBar;
