import Principal from "../../componentes/Principal/Principal";

function ListaClientes(){
        const clientesDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

    
    return <Principal titulo="Lista de Clientes">
        
        {clientesDoLocalStorage.map((cliente)=>{})}
    
    </Principal>
    
    
}

export default ListaClientes;
