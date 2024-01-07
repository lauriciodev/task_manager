import { useContext, useState } from "react";
import { StyledButtons } from "../../global/styles";
import { ContainerButtons, ModalContainer, StyledModal } from "./styles";
import { Context } from "../../context/context";
import api from "../../api/api";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function NewTasks({ getData }) {
  const navigate = useNavigate();
  const { modalOn, setModalOn } = useContext(Context);
  const { ["userId"]: id } = parseCookies();
  const [task, setTask] = useState(null);

  async function handleNewTask() {
    try {
      const { data } = await api.post("/task", {
        tarefa: task,
        checked: false,
        userId: Number(id),
      });
      toast.success("Tarefa criada com sucesso", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(data);
      getData();
      setModalOn(false);
    } catch (error) {
      navigate("/login");
      toast.error("Erro desconhecido", {
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
    <StyledModal display={modalOn ? "flex" : "none"}>
      <ModalContainer>
        <textarea
          placeholder="Insira nova tarefa"
          onChange={(e) => setTask(e.target.value)}
        ></textarea>

        <ContainerButtons>
          <StyledButtons onClick={() => setModalOn(false)}>
            Cancelar
          </StyledButtons>
          {task && <StyledButtons onClick={handleNewTask}>Criar</StyledButtons>}
        </ContainerButtons>
      </ModalContainer>
    </StyledModal>
  );
}

export default NewTasks;
