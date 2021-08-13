import React from 'react';


class ItemCarrinho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
            <tr>
                <th>{this.state.item.codigo}</th>
                <td>{this.state.item.titulo}</td>
                <td>{this.state.item.preco}</td>
                <td>{this.state.item.qtdEstoque}</td>
                <td>
                    <button className="btn" onClick={this.handleAddClick} ><i className="fa fa-plus-circle"></i></button>
                    <button className="btn" title="detalhes do produto"><i className="fa fa-question-circle"></i></button>
                </td>
            </tr>  
        );
    }
}


class CarrinhoCompras extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            produtos: props.produtos,
            carrinho: props.carrinho
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.carrinho);
        this.forceUpdate();
    }

    render () {
        return (
            <div>
                <h2> Carrinho de Compras </h2>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.carrinho.map((item, id) => {
                                return <ItemCarrinho key={id} item={item} />
                            })
                        }
                    </tbody>    
                </table>
                Total   
                <button className="btn" title="adicionar ao carrinho" type="button" onClick={this.handleClick}> <i className="fa fa-plus-circle"></i> Finalizar Compra</button>
            </div>
        );
    }
}

export default CarrinhoCompras;