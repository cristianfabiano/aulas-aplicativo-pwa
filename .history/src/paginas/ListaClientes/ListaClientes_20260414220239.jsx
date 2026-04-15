import { IoPersonAdd } from "react-icons/io5";
import Principal from "../../componentes/Principal/Principal";


function ListaClientes() {
    const clientesDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

    return <Principal titulo="Lista de Clientes" voltarPara="/">

        {clientesDoLocalStorage.map((cliente) => {
            return <div key={cliente.nome}>{cliente.nome}</div>
        })}
        <IoPersonAdd size={56} color="#ff91" />

    </Principal>
}

export default ListaClientes;
