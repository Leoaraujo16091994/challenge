import { Component } from "react";


class Produtos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: [],
            listaProdutos: [],
        }
    }

    isProdutoJaAdicionadoNoCarrinho(produtoSelecionado) {
        return !!this.props.produtos.find(p => produtoSelecionado.id === p.id);
    }

    _handleAdicionarItem(itemProduto) {
        this.produto = itemProduto;
        if (this.isProdutoJaAdicionadoNoCarrinho(itemProduto)) {
            return alert("Produto já adicionado ao carrinho")
        }
        this.props.adicionarItemNoCarrinho(this.produto);
    }

    diminuirQuantidadeEstoque(produtoSelecionado) {
        var index = this.listaProdutos.filter(produtoSelecionado);
        console.log("index", index);
    }

    render() {
        return (
            this.props.listaProdutos.filter(p => p.codigo.startsWith(this.props.objetoBusca.codigo)).map((produto, index) => {
                return (
                    <tr key={index}>
                        <td>{produto.codigo}</td>
                        <td>{produto.titulo}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.quantidadeEstoque}</td>
                        <td>
                            <button className="btn btn-primary mr-1" onClick={this._handleAdicionarItem.bind(this, produto)}>Adicionar</button>
                            &nbsp;
                            <button className="btn btn-secondary ml-1">Info</button>
                        </td>
                    </tr>
                )
            })
        );
    }
}
export default Produtos;