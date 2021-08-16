import { Component } from "react";

class CarrinhoDeCompras extends Component {

    constructor(props) {
        super(props);
        this.state = {
            produtos: [],
            listaProdutos: [],
        }
    }

    _handleAumentarQuantidadeSolicitada(produto) {
        const atingiuOLimite = produto.quantidadeSolicitada === produto.quantidadeEstoque;
        if (atingiuOLimite) {
            alert("Não é possivel adicionar mais item, pois atingiu o limite de quantidade no estoque");
            return;
        }
        this.incrementaQuantidadeProdutoCarrinho(produto);
        this.decrementaQuantidadeProdutoNaLista(produto);
    }

    incrementaQuantidadeProdutoCarrinho(produto) {
        const prod = this.props.produtos.find(p => p.id === produto.id);
        prod.quantidadeSolicitada += 1;
        this.setState((prev, props) => {
            return { produtos: this.props.produtos }
        });
    }

    incrementaQuantidadeProdutoNaLista(produto) {
        this.props.incrementaQuantidadeProdutoNaLista(produto);
    }

    _handleDiminuirQuantidadeSolicitada(produto) {
        // if (produto.quantidadeSolicitada < 1) {
        //     alert("A quantidade mínima permitida é 1");
        //     return;
        // }
        this.decrementaQuantidadeProdutoNoCarrinho(produto);
        this.incrementaQuantidadeProdutoNaLista(produto);
    }

    decrementaQuantidadeProdutoNoCarrinho(produto) {
        const novoProduto = produto;
        novoProduto.quantidadeSolicitada = novoProduto.quantidadeSolicitada - 1;
        const novoArrayProdutos = [...this.state.produtos, novoProduto];
        const novoEstado = { produtos: novoArrayProdutos };
        this.setState(novoEstado);
    }

    decrementaQuantidadeProdutoNaLista(produto) {
        this.props.decrementaQuantidadeProdutoNaLista(produto);
    }

    __handleRemoverProdutoCarrinho(produto) {
        this.props.produtos.splice(produto, 1);
        const novoArrayProdutos = [...this.state.produtos, this.props.produtos];
        const novoEstado = { produtos: novoArrayProdutos };
        this.incrementaQuantidadeProdutoNaLista(produto);
        this.setState(novoEstado);
    }

    valorTotal() {
        return this.props.produtos.reduce((a, c) => a + (c.quantidadeSolicitada * c.preco), 0);
    }

    render() {
        return (
            <div>
                <h1>Carrinho de Compras</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Qtd</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.produtos.map((produto, index) => {
                            let botaoDiminuir;
                            if (produto.quantidadeSolicitada > 1) {
                                botaoDiminuir = <button className="btn btn-warning" onClick={this._handleDiminuirQuantidadeSolicitada.bind(this, produto)}>Diminuir</button>
                            }

                            return (
                                <tr key={index}>
                                    <td>{produto.codigo}</td>
                                    <td>{produto.titulo}</td>
                                    <td>{produto.preco}</td>
                                    <td>{produto.quantidadeSolicitada ? produto.quantidadeSolicitada : 1}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={this._handleAumentarQuantidadeSolicitada.bind(this, produto)}>Aumentar</button>
                                        &nbsp;
                                        {botaoDiminuir}
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={this.__handleRemoverProdutoCarrinho.bind(this, produto)}>Remover</button>
                                    </td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td><b>Total</b></td>
                            <td>R$ {this.valorTotal()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CarrinhoDeCompras