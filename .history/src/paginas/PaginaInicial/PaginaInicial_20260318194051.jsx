import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";

function PaginaInicial() {
    return (
        <Principal>
            <BotaoCustomizado tipo="primario" aoClicar={() => {}}> Salvar</BotaoCustomizado>
            <BotaoCustomizado tipo="secundario" aoClicar={() => {}}>Cancelar</BotaoCustomizado>
            <BotaoCustomizado tipo="terciario" aoClicar={() => alert("Editar") {}}>
                Editar</BotaoCustomizado>
        </Principal>
    );
}

export default PaginaInicial;
