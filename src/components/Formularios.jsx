import React, {Component} from 'react';

export default class Formularios extends Component{
    
    cajaNombre = React.createRef();
    cajaApellido = React.createRef();
    cajas = {
        "nombre": React.createRef(),
        "apellido": React.createRef(),
        "email": React.createRef()
    };
    enviarInfo = (e) => {
        e.preventDefault();
        let nombre = this.cajas.nombre.current.value;
        let apellido = this.cajas.apellido.current.value;
        console.log(nombre, apellido);
    }
    
    render(){
        return(
            <form onSubmit={this.enviarInfo}>
                <label>Nombre: </label>
                <input type='text' ref={this.cajas.nombre}/>
                <br/>
                <label>Apellido: </label>
                <input type='text' ref={this.cajas.apellido}/>
                <br/>
                <button>Enviar</button>
            </form>
        )
    }

}