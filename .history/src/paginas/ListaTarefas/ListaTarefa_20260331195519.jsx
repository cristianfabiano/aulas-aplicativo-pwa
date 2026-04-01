import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function ListaTarefas() {
    const [novaTarefa, setNovaTarefa] = useState("");

    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = () => {
        console.log(novaTarefa);
    };

    return (
        <Principal>
            <h2>Lista de Tarefas</h2>

            <CampoCustomizado
                label="Nova Tarefa"
                id="nova tarefa"
                type="text"
                placeholder="Precione Enter para adicionar"
                value={novaTarefa}
                onChange={(event) => setNovaTarefa(event.target.value)}
            />

            <BotaoCustomizado tipo="secundario" aoClick={adicionarTarefa}>
                +
            </BotaoCustomizado>

            {JSON.stringify(tarefas, null, 2)}
        </Principal>
    );
}

export default ListaTarefas;