import React from 'react';


class FormularioBuscaProduto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codigo: '', 
            titulo: '',
            produtos: props.produtos ? props.produtos : []
        }

        this.manipuladorFormEnvio = this.manipuladorFormEnvio.bind(this);
        this.manipuladorInputChange = this.manipuladorInputChange.bind(this);
    }

    manipuladorInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value});
        console.log(this.state);
    }

    manipuladorFormEnvio(e){
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form autoComplete="off" onSubmit={this.manipuladorFormEnvio}>
                    <div className="row">
                        <div className="col-md-2">
                            <input type="text" className="form-control" name="codigo" value={this.state.codigo} placeholder="codigo" onChange={this.manipuladorInputChange}/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" name="titulo" value={this.state.titulo} placeholder="Titulo do Produto" onChange={this.manipuladorInputChange}/>
                        </div>
                        <div className="col-md-4">
                            <button className="btn" ><i className="fa fa-search"></i>Pesquisar </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormularioBuscaProduto