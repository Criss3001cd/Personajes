import React,{Component} from "react";

class Formulario extends  Component{
    constructor (props){
        super (props)

        this.state = {
            nombre:"nombre state"
        }
    }

    render(){
        return(
            <div>
                <h1>
                    <form action="">
                        <label htmlFor=""></label>
                        <input type="text" ></input>
                        <input type="sumbit" value="Enviar"></input>
                    </form>
                </h1>
                <h3>
                    {'hola ${this.state.nombre}'}
                </h3>
            </div>
        )
    }
}

export default Formulario;