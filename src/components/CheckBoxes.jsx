import React, { Component } from 'react'

export default class CheckBoxes extends Component {

    datos = React.createRef()
    recogerDatos = (e) => {
        e.preventDefault();
        let datos = this.datos.current.options;
        datos.forEach((dato, index) => {
            if(dato.selected === true){
                this.datos[index] = dato.current.value;
            }
        })
        this.setState({
            datos: this.datos
        })
        console.log(this.state.datos);

    }

    state = {
        datos : []
    }

    render() {
        return (
        <div>
            <h1>CheckBoxes</h1>
            <form onSubmit={this.recogerDatos}>
                <label><input type="checkbox" name="check1" value="1" ref={this.datos}/> Check 1 </label>
                <label><input type="checkbox" name="check2" value="2" ref={this.datos}/> Check 2 </label>
                <label><input type="checkbox" name="check3" value="3" ref={this.datos}/> Check 3 </label>

                <button>Enviar</button>
            </form>
        </div>
        )
    }
}
