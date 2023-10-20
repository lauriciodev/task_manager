import { useEffect, useState } from "react";
import api from "../../api/api";
import {
  ContainerButtonsStyled,
  ContainerTasks,
  ModalDelete,
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
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const navigate = useNavigate();
  const { ["userId"]: id } = parseCookies();

  useEffect(() => {
    getData();
  }, []);

  function showModal(idTask) {
    setTaskId(idTask);
    setConfirmDelete(true);
  }

  async function getData() {
    try {
      const { data } = await api.get(`/task/${id}`);
      setTasks(data);
    } catch (error) {
      console.log("taks erro");
      navigate("/login");
    }
  }

  async function loadData() {
    setTasks(tasks);
  }

  async function handleDeleteTask(id) {
    try {
      const { data } = await api.delete(`/task/${id}`);

      const filteredTasks = tasks.filter((item) => item.id !== id);
      setTasks(filteredTasks);

      toast.success("Tarefa deletada com sucesso!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setConfirmDelete(false);
    } catch (error) {
      await toast.error("Erro Desconhecido", {
        position: "top-center",
        autoClose: 1000,
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

  async function handleCheckTask(id, checked) {
    try {
      const result = await api.put(`/task/${id}`, {
        checked: checked,
      });
      setTasks(
        tasks.map((item) =>
          item.id === id
            ? {
                ...item,
                checked: checked,
              }
            : item
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  //lauricio esteve aqui

  return (
    <ContainerTasks>
      <ModalDelete display={confirmDelete ? "block" : "none"}>
        <p>Deseja realmente deletar esta tarefa?</p>
        <ContainerButtonsStyled>
          <StyledButtons onClick={() => setConfirmDelete(false)}>
            Cancelar
          </StyledButtons>
          <StyledButtons onClick={() => handleDeleteTask(taskId)}>
            Confirmar
          </StyledButtons>
        </ContainerButtonsStyled>
      </ModalDelete>
      <NewTasks getData={getData} />
      <h1>minhas tarefas</h1>
      <SubContainerTasks>
        {tasks.length == 0 ? (
          <StyledMsg>
            <p>Você ainda não tem tarefas cadastradas</p>
          </StyledMsg>
        ) : (
          tasks.map((task) => (
            <StyledTasks
              key={task.id}
              background={task.checked ? "#243f2b73" : "#8b1e1e0"}
            >
              <StyledLabel htmlFor={task.id}>
                <input
                  onChange={() => handleCheckTask(task.id, !task.checked)}
                  type="checkbox"
                  id={task.id}
                  checked={task.checked}
                />
                <p textstyle={task.checked ? "line-through" : "line-through"}>
                  {task.tarefa}
                </p>
                <StyledButtons onClick={() => showModalEdit(task.id)}>
                  <FaPencilAlt />
                </StyledButtons>
                <StyledButtons onClick={() => showModal(task.id)}>
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
