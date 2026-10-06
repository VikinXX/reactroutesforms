import React, { Component } from "react";

export default class TablaMultiplicar extends Component {

    array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    numero = React.createRef();
    dibujarTabla = (e) =>{
        e.preventDefault();

        this.setState({
            numero: this.numero.current.value
        })
    }
    state = {
        numero: null
    }

    render(){
        return(
            <div>
                <form onSubmit={this.dibujarTabla}>
                    <label>Numero: </label>
                    <input type="number" ref={this.numero}></input>
                    <br/>
                    <button>Enviar</button>
                </form>
                {
                    this.state.numero != null ? 
                
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Multiplicación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            this.array.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{this.state.numero} x {item}</td>
                                        <td>{this.state.numero * item}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                : console.log("No hay numero")
                }
            </div>
        )
    }

}