import React from "react";
import PropTypes from'prop-types'

const Personaje =({nombre,edad,genero, descripcion,img}) =>(
<>
    <div className="card" style={  {width: '50rem'}  }>     
        <div className="card-body">
            <table >
                <tr>
                    <td style={  {padding: '40px'}  }>
                        <h5 className="card-title">{nombre }</h5>
                        <p className="card-text">Edad: {edad}</p>
                        <p className="card-text">Genero: {genero}</p>
                        <p className="card-text">Descripción: {descripcion}</p>
                    </td>
                    <td><img src={img} alt=""style={  {width: '15rem'}  } /></td>
                </tr>
            </table>
            
            
            
        </div>
    </div>  
</>

);

Personaje.propTypes ={
    nombre:PropTypes.string,
    edad:PropTypes.number,
    genero:PropTypes.string,
    descripcion:PropTypes.string,
    img:PropTypes.string
}

Personaje.defaultProps = {
    nombre:"Nombre no asignado",
    edad:"Edad no asignada",
    genero:"Genero no asignado" ,
    descripcion:"Descripción no asignada",
    img:"No se encontro ninguna imagen"

}

export default Personaje;