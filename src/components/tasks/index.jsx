import { useEffect, useState } from "react";
import api from "../../api/api";
import {
  ContainerTasks,
  StyledLabel,
  StyledTasks,
  SubContainerTasks,
} from "./styles";

import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { StyledButtons } from "../../global/styles";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/task");
        setTasks(data);
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
        {tasks.map((task) => {
          return (
            <StyledTasks key={task.id}>
              <input type="checkbox" id={task.id} checked={task.checked} />
              <StyledLabel htmlFor={task.id}>
                <p> {task.tarefa}</p>
                <StyledButtons>
                  <FaPencilAlt />
                </StyledButtons>
                <StyledButtons>
                  <FaTrash />
                </StyledButtons>
              </StyledLabel>
            </StyledTasks>
          );
        })}
      </SubContainerTasks>
    </ContainerTasks>
  );
}

export default Tasks;
