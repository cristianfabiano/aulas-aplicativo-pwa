import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";

function PaginaInicial() {
    return (
        <Principal>
            <BotaoCustomizado tipo="primario" aoClicar={() => alert ("Salvar Clicando ")}>
                 Salvar
                 </BotaoCustomizado>
            <BotaoCustomizado tipo="secundario" aoClicar={() => alert("Cancelar ao clicar")}>
                Cancelar
                </BotaoCustomizado>
            <BotaoCustomizado tipo="terciario"aoClicar={() => alert("Editar ao Clicar")}>
                Editar
                </BotaoCustomizado>
        </Principal>
    );
}

export default PaginaInicial;
