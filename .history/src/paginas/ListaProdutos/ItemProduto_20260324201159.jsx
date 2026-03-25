import "./ItemProduto.css";

function ItemProduto({produto}) {
    return (
        <div className="item-produto__root">
            <span>{produto.nome}</span>
            <span>{produto.preco}</span>

            {produto.cores.map((aquarela, contagem) => {
                ret]
            })}
        </div>
    );
}

export default ItemProduto;