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

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/task/${usuario.id}`);
        setTasks(data);
        console.log(data);
        if (data.error) {
          console.log("erro");
        }
      } catch (error) {
        console.log("deu erro");
        navigate("/login");
      }
    })();
  }, []);

  return (
    <ContainerTasks>
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
                <StyledButtons>
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
