import React, { Component } from "react";

class FormularioBusca extends Component {

  constructor(props) {
    super(props);
    this.codigo = "";
    this.titulo = "";
  }

  _handleMudancaCodigo(evento) {
    evento.stopPropagation();
    this.codigo = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _buscarProduto(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.buscarProduto({codigo: this.codigo, titulo: this.titulo});
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._buscarProduto.bind(this)}>
        <div className="row">
          <div className="col">
            <input type="text" placeholder="Código" className="form-control"
              onChange={this._handleMudancaTitulo.bind(this)} />
          </div>
          <div className="col">
            <input type="text" placeholder="Título" className="form-control"
              onChange={this._handleMudancaTitulo.bind(this)} />
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={this._buscarProduto.bind(this)} >
              Buscar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormularioBusca;
