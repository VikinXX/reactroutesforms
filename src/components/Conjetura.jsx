import React, {Component} from 'react';

export default class Conjetura extends Component{

    numero = React.createRef();
    enviarInfo = (e) => {
        e.preventDefault();
        let numero = parseInt(this.numero.current.value);
        let numeros = [];
        while(numero !== 1){
            if(numero % 2 === 0){
                numero = numero / 2;
            }else{
                numero = (numero * 3) + 1;
            }
            numeros.push(numero);
        }
        this.setState({
            numeros: numeros
        });
        console.log("Se ha llegado a 1");
    }
    state = {
        numeros: []
    }
    render(){
        return(
            <div>
                <form onSubmit={this.enviarInfo}>
                    <label>Numero: </label>
                    <input type="number" ref={this.numero}></input>
                    <br/>
                    <button>Enviar</button>
                </form>
                <ul>
                    {
                        this.state.numeros.map((num, index) => {
                            return (<li key={index}>{num}</li>);
                        })
                    }
                </ul>
            </div>
        )
    }

}