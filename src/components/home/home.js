import React from 'react';
import newtiger from './Imagenes/newtiger.png';
import './home.css';
function homeComponent() {

    return (
        <div className="home container">
            <img src={newtiger} alt="description"/>
            <div className="text-container">
                <h1>Nuevo León AirPredict</h1>
                <hr/>
                <h3> Un modelo para la predicción de la calidad de aire en Nuevo León </h3>
                <a href="/app" className="boton">Probar la app</a>
            </div>
        </div>

    );
}

export default homeComponent;

