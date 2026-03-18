import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";
import { useNavigate } from 'react-router-dom';


function PaginaInicial() {
    return (
        <Principal>
            <BotaoCustomizado tipo="primario" aoClicar={() => alert ("Salvar ao Clicar ")}>
                 Salvar
                 </BotaoCustomizado>
            <BotaoCustomizado tipo="secundario" aoClicar={() => alert("Cancelar ao Clicar")}>
                Cancelar
                </BotaoCustomizado>
            <BotaoCustomizado tipo="terciario"aoClicar={() => alert("Editar ao Clicar")}>
                Editar
                </BotaoCustomizado>
        </Principal>
    );
}

export default PaginaInicial;
