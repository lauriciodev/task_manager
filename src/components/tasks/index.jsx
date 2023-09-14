import { useEffect, useState } from "react";
import api from "../../api/api";
import {
  ContainerTasks,
  StyledLabel,
  StyledMsg,
  StyledTasks,
  SubContainerTasks,
} from "./styles";

import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { StyledButtons } from "../../global/styles";
import { useNavigate } from "react-router-dom";
import { parseCookies } from "nookies";
import NewTasks from "../newTasks";
import { toast } from "react-toastify";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();
  const { ["userId"]: id } = parseCookies();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/task/${id}`);
        setTasks(data);
      } catch (error) {
        console.log("taks erro");
        navigate("/login");
      }
    })();
  }, []);

  async function handleDeleteTask(id) {
    try {
      const { data } = await api.delete(`/task/${id}`);
      toast.success("Usuario deletado com sucesso!", {
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
      window.location.href = "/";
    } catch (error) {
      await toast.error("Erro Desconhecido", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      window.location.href = "/login";
    }
  }

  return (
    <ContainerTasks>
      <NewTasks />
      <h1>minhas tarefas</h1>
      <SubContainerTasks>
        {tasks.length == 0 ? (
          <StyledMsg>
            <p>Você ainda não tem tarefas cadastradas</p>
          </StyledMsg>
        ) : (
          tasks.map((task) => (
            <StyledTasks key={task.id}>
              <StyledLabel htmlFor={task.id}>
                <input type="checkbox" id={task.id} checked={task.checked} />
                <p> {task.tarefa}</p>
                <StyledButtons>
                  <FaPencilAlt />
                </StyledButtons>
                <StyledButtons onClick={() => handleDeleteTask(task.id)}>
                  <FaTrash />
                </StyledButtons>
              </StyledLabel>
            </StyledTasks>
          ))
        )}
      </SubContainerTasks>
    </ContainerTasks>
  );
}

export default Tasks;
