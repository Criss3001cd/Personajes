import React from "react";
import PropTypes from'prop-types'

/* let estudiante = {
    nombre:"Brandon",
    edad:19 
} */

const ComponentePrueba = ({nombre,edad,genero}) =>(
    <>
         <div className="card" style={  {width: '18rem'} }>     
            <div className="card-body">
                <h5 className="card-title">{nombre }</h5>
                <p className="card-text">Edad: {edad}</p>
                <p className="card-text">Genero: {genero}</p>

            </div>
        </div>  
    </>
);

ComponentePrueba.ropTypes ={
    nombre:PropTypes.string,
    edad:PropTypes.number,
    genero:PropTypes.string
}

ComponentePrueba.defaultProps = {
    nombre:"Nombre no asignado",
    edad:"Edad no asignada",
    genero:"genero no asignado" 

}

export default ComponentePrueba;