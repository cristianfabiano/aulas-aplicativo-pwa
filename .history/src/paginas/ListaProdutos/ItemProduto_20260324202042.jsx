import "./ItemProduto.css";

function ItemProduto({ produto }) {
    return (
        <div className="item-produto__root">
            <span>{produto.nome}</span>
            <span>{produto.preco}</span>

            {produto.cores.map((aquarela, contagem) => {
                return <div key={contagem} style={{backgroundColor: aquarela }}>
                    {aquarela}

                </div>;
            })}
        </div>
    );
}

export default ItemProduto;