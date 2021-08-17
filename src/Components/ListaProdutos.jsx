import React, { Component } from "react";
import Produtos from "./Produtos";

class ListaProdutos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      listaProdutos: [],
    }
  }

  adicionarItemNoCarrinho(itemProduto) {
    this.produto = itemProduto;
    this.props.adicionarItemNoCarrinho(this.produto);
  }

  render() {
    return (
      <div>
        <h1>Lista de Produtos</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Produto</th>
              <th>Preço</th>
              <th>Qtd. Estoque</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <Produtos 
              adicionarItemNoCarrinho={this.adicionarItemNoCarrinho.bind(this)} 
              produtos={this.props.produtos} listaProdutos={this.props.listaProdutos} 
              objetoBusca={this.props.objetoBusca}
            />
          </tbody>
        </table>
      </div>
    )
  }

}
export default ListaProdutos