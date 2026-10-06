import {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';
import Formularios from './Formularios';
import Conjetura from './Conjetura';
import TablaMultiplicar from './TablaMultiplicar';
import TablaMultiplicarV2 from './TablaMultiplicarV2';
import SeleccionMultiple from './SeleccionMultiple';
import CheckBoxes from './CheckBoxes';

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cine' element={<Cine/>}/>
                    <Route path='/musica' element={<Musica/>}/>
                    <Route path='/form' element={<Formularios/>}/>
                    <Route path='/conjetura' element={<Conjetura/>}/>
                    <Route path='/tabla' element={<TablaMultiplicar/>}/>
                    <Route path='/random' element={<TablaMultiplicarV2/>}/>
                    <Route path='/seleccion' element={<SeleccionMultiple/>}/>
                    <Route path='/check' element={<CheckBoxes/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}