import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function ListaTarefas() {
    const [novaTarefa, setNovaTarefa] = useState("");

    const [tarefas, setTarefas] = useState([]);

    return (
        <Principal>
            <h2>Lista de Tarefas</h2>

            <CampoCustomizado
                label="Nova Tarefa"
                id ="nova tarefa"
                type="text"
                placeholder="Precione Enter para adicionar"
                value={novaTarefa}
                onChange={(event) => setNovaTarefa(event.target.value)}
                 />

                 {JSON.str}
        </Principal>
    );
}

export default ListaTarefas;