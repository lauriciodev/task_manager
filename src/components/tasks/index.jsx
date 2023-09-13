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

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const { ["userToken"]: token } = parseCookies();
  const { ["userId"]: id } = parseCookies();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/task/${id}`);
        console.log("tasks ", token);
        setTasks(data);
      } catch (error) {
        console.log("taks erro");
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
