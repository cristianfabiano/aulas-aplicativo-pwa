import { MdAddCircle } from "react-icons/md";
import Principal from "../../componentes/Principal/Principal";


function ListaClientes() {
    const clientesDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

    return <Principal titulo="Lista de Clientes" voltarPara="/">

        {clientesDoLocalStorage.map((cliente) => {
            return <div key={cliente.nome}>{cliente.nome}</div>
        })}
        <MdAddCircle size={56} />

    </Principal>
}

export default ListaClientes;
