import React, { useState } from "react";
import { ModalContainerSyled } from "./styles";
import axios from "axios";
import api from "../../api/api";

function ModalEdit(task) {
  return (
    <ModalContainerSyled>
      <button onClick={() => setTask(id)}>get task</button>
    </ModalContainerSyled>
  );
}

export default ModalEdit;
