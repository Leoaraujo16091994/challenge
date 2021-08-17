
import './App.css';
import { Component } from 'react';
import FormularioBusca from './Components/FormularioBusca';
import ListaProdutos from './Components/ListaProdutos';
import CarrinhoDeCompras from './Components/CarrinhoDeCompras.jsx';


const listaProdutos = [
  {
      "id":1,
      "codigo":"01",
      "titulo":"Feijão",
      "descricao":"Feijão de corda",
      "preco": 5.50,
      "quantidadeEstoque":5,
      "quantidadeSolicitada": 1
  },
  {
      "id":2,
      "codigo":"02",
      "titulo":"Arroz",
      "descricao":"Arroz branco",
      "preco": 4.75,
      "quantidadeEstoque":5,
      "quantidadeSolicitada": 1
  },
  {
      "id":3,
      "codigo":"03",
      "titulo":"Macarrão",
      "descricao":"Macarrão spaghetti",
      "preco": 3.99,
      "quantidadeEstoque":5,
      "quantidadeSolicitada": 1
  },
  {
      "id":4,
      "codigo":"04",
      "titulo":"Oleo",
      "descricao":"Oleo lisa",
      "preco": 2.90,
      "quantidadeEstoque":5,
      "quantidadeSolicitada": 1
  },
  {
      "id":5,
      "codigo":"05",
      "titulo":"Carne",
      "descricao":"Carne bovina",
      "preco": 2.00,
      "quantidadeEstoque":10,
      "quantidadeSolicitada": 1
  },
  {
      "id":6,
      "codigo":"06",
      "titulo":"Linguiça",
      "descricao":"Linguiça calabresa",
      "preco": 1.00,
      "quantidadeEstoque":10,
      "quantidadeSolicitada": 1
  },
  {
      "id":7,
      "codigo":"07",
      "titulo":"Refrigerante",
      "descricao":"Refrigerante Coca Cola",
      "preco": 7.00,
      "quantidadeEstoque":7,
      "quantidadeSolicitada": 1
  },
  {
      "id":8,
      "codigo":"08",
      "titulo":"Margarina",
      "descricao":"Margarina qualy",
      "preco": 2.70,
      "quantidadeEstoque":7,
      "quantidadeSolicitada": 1
  },
  {
      "id":9,
      "codigo":"09",
      "titulo":"Açucar",
      "descricao":"Açucar mascavo",
      "preco": 3.89,
      "quantidadeEstoque":7,
      "quantidadeSolicitada": 1
  },
  {
      "id":10,
      "codigo":"10",
      "titulo":"Agua",
      "descricao":"Agua Indaia ",
      "preco": 3.00,
      "quantidadeEstoque":15,
      "quantidadeSolicitada": 1
  },

];

class App extends Component {

  constructor() {
    super();

    this.state = {
      listaProdutos: listaProdutos,
      produtos: [],
      objetoBusca: {
        codigo: '',
        titulo: '',
      },
    }
  }

  buscarProduto(objetoBusca) {
    // TODO: corrigir
    this.setState(objetoBusca);
  }

  adicionarItemNoCarrinho(produto) {
    const novoProduto = { ...produto };
    const novoArrayProdutos = [...this.state.produtos, novoProduto];
    const novoEstado = { produtos: novoArrayProdutos };
    this.decrementarItemNaLista(produto);
    this.setState(novoEstado);
  }

  incrementarItemNaLista(produto) {
    const prod = this.state.listaProdutos.find(p => p.id === produto.id);
    prod.quantidadeEstoque += 1;

    this.setState((prev, props) => {
      return { listaProdutos: this.state.listaProdutos }
    });
  }

  decrementarItemNaLista(produto) {
    const prod = this.state.listaProdutos.find(p => p.id === produto.id);
    prod.quantidadeEstoque -= 1;

    this.setState((prev, props) => {
      return { listaProdutos: this.state.listaProdutos }
    });
  }

  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <h1>Compras</h1>
          <FormularioBusca buscarProduto={this.buscarProduto.bind(this)} />
        </div>

        <div className="row mt-5">
          <div className="col">
            <ListaProdutos
              adicionarItemNoCarrinho={this.adicionarItemNoCarrinho.bind(this)}
              produtos={this.state.produtos}
              objetoBusca={this.state.objetoBusca}
              listaProdutos={this.state.listaProdutos}
            />
          </div>

          <div className="col">
            <CarrinhoDeCompras
              produtos={this.state.produtos}
              listaProdutos={this.state.listaProdutos}
              decrementaQuantidadeProdutoNaLista={this.decrementarItemNaLista.bind(this)}
              incrementaQuantidadeProdutoNaLista={this.incrementarItemNaLista.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
