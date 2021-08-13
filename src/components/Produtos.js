import React, { Component } from 'react';


class ItemProduto extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         element: props.element,
         carrinho: props.carrinho,
         produtos: props.produtos
      }

      this.handleAddClick = this.handleAddClick.bind(this);
      this.getProdutoSelecionado = this.getProdutoSelecionado.bind(this);
   }

   handleAddClick(event) {
      const produto = this.getProdutoSelecionado();
      this.adicionaProdutoNoCarrinho(produto);
   }

   getProdutoSelecionado() {
      return this.state.produtos.find(p => p.id === this.state.element.id);
   }

   adicionaProdutoNoCarrinho(produto) {
      if (!this.isProdutoSelecionadoJaAdicionadoNoCarrinho()) {
         this.state.carrinho.push({...produto});
      }
   }

   isProdutoSelecionadoJaAdicionadoNoCarrinho() {
      return !!this.state.carrinho.find(p => p.id === this.state.element.id);
   }

   render() {
      return (
         <tr>
            <th>{this.state.element.codigo}</th>
            <td>{this.state.element.titulo}</td>
            <td>{this.state.element.preco}</td>
            <td>{this.state.element.qtdEstoque}</td>
            <td>
               <button className="btn" onClick={this.handleAddClick} ><i className="fa fa-plus-circle"></i></button>
               <button className="btn" title="detalhes do produto"><i className="fa fa-question-circle"></i></button>
            </td>
         </tr>  
      );
   }
}

class Produtos extends Component {
   constructor(props) {
      super(props);
      this.state = {
         carrinho: props.carrinho ? props.carrinho : [],
         produtos: props.produtos ? props.produtos : []
      }
   }  

   render() {
      return (
         <div>
            <table className="table">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">Código</th>
                     <th scope="col">Produto</th>
                     <th scope="col">Valor</th>
                     <th scope="col">Quantidade em Estoque</th>
                     <th scope="col">Ação</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     this.state.produtos.map((item, id) =>{
                        return <ItemProduto key={id} element={item} produtos={this.state.produtos} carrinho={this.state.carrinho} />
                     })
                  }
               </tbody>
            </table>
         </div>
      );
   }
}

export default Produtos;