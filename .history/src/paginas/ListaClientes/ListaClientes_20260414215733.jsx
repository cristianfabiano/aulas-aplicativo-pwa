import Principal from "../../componentes/Principal/Principal";
import { IoPersonAdd } from "react-icons/io5";


function ListaClientes(){
        const clientesDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

    
    return
     <Principal titulo="Lista de Clientes" voltarPara="/">
        
        {clientesDoLocalStorage.map((cliente)=>{
            return <div key ={cliente.nome}>{cliente.nome}</div>
        })}
        <IoPersonAdd
    
    </Principal>
    
    
}

export default ListaClientes;
