import {
  ContainerButtons,
  ContainerForm,
  ContainerLogin,
  StyledInput,
} from "./styled";
import { StyledButtons } from "../../global/styles";
import { useContext, useState } from "react";
import { Context } from "../../context/context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(Context);
  return (
    <ContainerLogin>
      <ContainerForm onSubmit={(event) => handleLogin(event, email, password)}>
        <h2>Login</h2>
        <StyledInput
          name="email"
          type="email"
          placeholder="seu Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="sua senha"
        />

        <ContainerButtons>
          <StyledButtons type="submit">Entrar</StyledButtons>
          <StyledButtons>Criar conta</StyledButtons>
        </ContainerButtons>
      </ContainerForm>
    </ContainerLogin>
  );
}

export default Login;
