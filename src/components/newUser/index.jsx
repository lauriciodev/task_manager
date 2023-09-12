import {
  ContainerButtons,
  ContainerForm,
  ContainerLogin,
  StyledInput,
} from "./styles";
import { StyledButtons } from "../../global/styles";
import api from "../../api/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function NewUser() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleNewUser(event) {
    event.preventDefault();

    try {
      const { data } = await api.post("/user", {
        nome,
        email,
        password,
      });

      if (data) {
        await navigate("/login");
        toast.success("Usuario cadastrado com sucesso!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Erro ao cadastrar usuario", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={(event) => handleNewUser(event)}>
        <h2>Criar conta</h2>
        <StyledInput
          name="nome"
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <StyledInput
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
        />
        <StyledInput
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Confirmar Senha"
        />

        <ContainerButtons>
          <StyledButtons type="submit">Criar</StyledButtons>
          <Link to={"/login"}>Já tenho uma conta</Link>
        </ContainerButtons>
      </ContainerForm>
    </ContainerLogin>
  );
}

export default NewUser;
