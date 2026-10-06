import React, { Component } from "react";

export default class TablaMultiplicarV2 extends Component {

    array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    numero = React.createRef();
    dibujarTabla = (e) =>{
        e.preventDefault();
        if(this.state.numerosRandom.length === 0){
            return alert("Se deben generar números aleatorios previamente a dibujar la tabla.");
        }

        this.setState({
            numero: this.numero.current.value
        })
    }

    generarNumerosRandom = () => {
        let numerosRandom = [];
        for(var i = 0 ; i< 10 ; i++){
            numerosRandom.push(Math.floor(Math.random() * 100) + 1);
        }
        this.setState({
            numerosRandom: numerosRandom
        });
    }
    state = {
        numero: null,
        numerosRandom: []
    }
    
    componentDidMount = () => {
        this.generarNumerosRandom();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.dibujarTabla}>
                    <label>Numero: </label>
                    <select ref={this.numero}>
                        {
                            this.state.numerosRandom.map((num, index) => {
                                return (<option key={index} value={num}>{num}</option>);
                            })
                        }
                    </select>
                    <br/>
                    <button>Enviar</button>
                </form>
                <button onClick={this.generarNumerosRandom}>Generar Números Random</button>
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