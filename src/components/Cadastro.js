import React from 'react';
import CarrinhoCompras from './CarrinhoCompras';
import Produtos from './Produtos';
import FormularioBuscaProduto from './FormularioBuscaProduto';


const listaProdutos = [
    {
        "id": 1,
        "codigo": "01",
        "titulo": "Feijão",
        "descricao": "Feijão de corda",
        "preco": "R$ 5,50",
        "qtdEstoque": 5
    },
    {
        "id": 2,
        "codigo": "02",
        "titulo": "Arroz",
        "descricao": "Arroz branco",
        "preco": "R$ 4,75",
        "qtdEstoque": 5
    },
    {
        "id": 3,
        "codigo": "03",
        "titulo": "Macarrão",
        "descricao": "Macarrão spaghetti",
        "preco": "R$ 3,99",
        "qtdEstoque": 5
    },
    {
        "id": 4,
        "codigo": "04",
        "titulo": "Oleo",
        "descricao": "Oleo lisa",
        "preco": "R$ 2,90",
        "qtdEstoque": 5
    },
    {
        "id": 5,
        "codigo": "05",
        "titulo": "Carne",
        "descricao": "Carne bovina",
        "preco": "R$ 22,00",
        "qtdEstoque": 10
    },
    {
        "id": 6,
        "codigo": "06",
        "titulo": "Linguiça",
        "descricao": "Linguiça calabresa",
        "preco": "R$ 17,00",
        "qtdEstoque": 10
    },
    {
        "id": 7,
        "codigo": "07",
        "titulo": "Refrigerante",
        "descricao": "Refrigerante Coca Cola",
        "preco": "R$ 7,00",
        "qtdEstoque": 7
    },
    {
        "id": 8,
        "codigo": "08",
        "titulo": "Margarina",
        "descricao": "Margarina qualy",
        "preco": "R$ 2,70",
        "qtdEstoque": 7
    },
    {
        "id": 9,
        "codigo": "09",
        "titulo": "Açucar",
        "descricao": "Açucar mascavo",
        "preco": "R$ 3,89",
        "qtdEstoque": 7
    },
    {
        "id": 10,
        "codigo": "10",
        "titulo": "Agua",
        "descricao":  "Agua Indaia ",
        "preco": "R$ 3,00",
        "qtdEstoque": 15
    },
];

const carrinho = [];


class Cadastro extends React.Component {
    render() {
        return (
            <div>
                <h1> Cadastro </h1>
                    <div className="row">
                        <div className="col-md-5">
                            <h2> Lista de produtos</h2>
                            <FormularioBuscaProduto produtos={listaProdutos}/>
                            <br/>
                            <Produtos carrinho={carrinho} produtos={listaProdutos} />
                        </div>

                        <div className ="col-md-6">
                            <CarrinhoCompras carrinho={carrinho} produtos={listaProdutos}  />
                        </div>
                    </div>
            </div> 
        );
    }
}

export default Cadastro