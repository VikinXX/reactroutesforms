import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {

    selectMultiple = React.createRef();
    
    state = {
        seleccionados: ""
    }

    mostrarSeleccionados = (e) => {
        e.preventDefault();
        //Si recuperamos value, solamente nos devuelve el primer elemento, necesitamos recuperar las options
        let options = this.selectMultiple.current.options;
        let data = "";
        for(var opt of options){
            if(opt.selected == true){
                data += opt.value + " ";
            }
        }
        this.setState({
            seleccionados: data
        })
    }

    render() {
        return (
            <div>
                <h1>Selección Múltiple</h1>
                <h3 style={{color: "blue"}}>Elementos seleccionados: {this.state.seleccionados}</h3>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>Seleccione elementos: </label>
                    <select size="6" multiple ref={this.selectMultiple}>
                        <option value="1">Elemento 1</option>
                        <option value="2">Elemento 2</option>
                        <option value="3">Elemento 3</option>
                        <option value="4">Elemento 4</option>
                        <option value="5">Elemento 5</option>
                        <option value="6">Elemento 6</option>
                        <option value="7">Elemento 7</option>
                        <option value="8">Elemento 8</option>
                    </select>
                    <button>Mostrar seleccionados</button>
                </form>
            </div>
        )
    }
}
