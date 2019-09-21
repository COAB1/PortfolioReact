import React from "react";
import Habilidade from"./Habilidade";
import "./Habilidades.css";

class Habilidades extends React.Component {
    render() {
        return(
            <div className="habilidades-container">
            <Habilidade porcentagem={5} nome="React" />
            <Habilidade porcentagem={30} nome="Python" />
                 
                            
            </div>
        );
    }
       
}
export default Habilidades;