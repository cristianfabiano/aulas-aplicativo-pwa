import "./ItemProduto.css";

function ItemProduto({produto}) {
    return (
        <div className="item-produtos__root">
            <span>{produto.nome}</span>
            <span>{produto.preco}</span>

            
        </div>
    );
}

export default ItemProduto;