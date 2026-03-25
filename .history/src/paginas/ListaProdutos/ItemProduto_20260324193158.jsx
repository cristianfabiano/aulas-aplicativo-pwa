import "./ItemProduto.css";

function ItemProduto (){
    return (
    <div key={index} className="lista-produtos__item">
                    <span>{itemProduto.nome}</span>
                    <span>{itemProduto.preco}</span>
             </div>
}

export default ItemProduto;