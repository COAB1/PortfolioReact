import React from "react";
import Habilidade from"./Habilidade";
import "./Habilidades.css";

class Habilidades extends React.Component {
    render() {
        return(
            <div className="habilidades-container">
            <Habilidade/>
                
            </div>
        );
    }
       
}
export default Habilidades;