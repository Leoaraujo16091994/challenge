
import './App.css';
import { Component } from 'react';
import FormularioBusca from './Components/FormularioBusca';
import ListaProdutos from './Components/ListaProdutos';
import CarrinhoDeCompras from './Components/CarrinhoDeCompras';


const listaProdutos = [
  {
    "id": 1,
    "codigo": "01",
    "titulo": "Feijão",
    "descricao": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "preco": 5.44,
    "quantidadeEstoque": 5,
    "quantidadeSolicitada": 1
  },
  {
    "id": 2,
    "codigo": "02",
    "titulo": "Arroz",
    "descricao": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "preco": 4.35,
    "quantidadeEstoque": 10,
    "quantidadeSolicitada": 1
  },
  {
    "id": 3,
    "codigo": "03",
    "titulo": "Macarrão",
    "descricao": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "preco": 3.70,
    "quantidadeEstoque": 9,
    "quantidadeSolicitada": 1
  }
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
          <h2>Carrinhos de Compras</h2>
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
