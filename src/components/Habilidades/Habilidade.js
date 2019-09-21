import React from "react";
import Habilidade from "./Habilidade";
import "./Habilidades.css";

class Habilidades extends React.Component {
    render() {
        return(
            <div>
                {/*Nome da habilidade*/}
                <div>{this.props.nome}</div>

                {/* A barrinha em si */}
                <div>
                    {/*Parte preenchida*/ }
                    <div />

                    {/*Parte que falta*/ }
                    <div />
                </div>

                {/*A barrinha*/}
                <div>

                </div>
            </div>
        );
    }
       
}
export default Habilidades;