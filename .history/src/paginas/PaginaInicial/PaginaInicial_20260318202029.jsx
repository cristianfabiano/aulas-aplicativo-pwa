import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";
import { useNavigate } from 'react-router-dom';


function PaginaInicial() {
    const navigate = useNavigate();
    return (
        <Principal>
            <BotaoCustomizado tipo="primario" aoClicar={() => () => navigate("/lista-produtos")}>
                Lisata de Produtos
            </BotaoCustomizado>
            <BotaoCustomizado tipo="secundario" aoClicar={() => navigate("/Rota invalida")}>
                Cancelar
            </BotaoCustomizado>
            <BotaoCustomizado tipo="terciario" aoClicar={() => alert("Editar ao Clicar")}>
                Editar
            </BotaoCustomizado>
        </Principal>
    );
}

export default PaginaInicial;
