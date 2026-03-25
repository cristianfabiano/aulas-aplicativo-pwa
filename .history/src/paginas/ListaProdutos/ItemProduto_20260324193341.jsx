import "./ItemProduto.css";

function ItemProduto({produto}) {
    return (
        <div className="lista-produtos__item">
            <span>{produto.nome}</span>
            <span>{produto.preco}</span>
        </div>
    );
}

export default ItemProduto;