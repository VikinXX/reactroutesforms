import {Component} from 'react';

export default class Menu extends Component{
    render(){
        return(
            <nav style={{gap: "10px", display: "flex", flexDirection: "row"}}>
                <a href='/'>Home</a>
                <a href='/cine'>Cine</a>
                <a href='/musica'>Música</a>
                <a href='/form'>Formulario</a>
                <a href='/conjetura'>Conjetura</a>
                <a href='/tabla'>Tabla</a>
                <a href='/random'>Random</a>
                <a href='/seleccion'>Selección Múltiple</a>
                <a href='/check'>CheckBoxes</a>
            </nav>
        )
    }
}