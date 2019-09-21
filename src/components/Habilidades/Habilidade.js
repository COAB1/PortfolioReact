import React from "react";
import "./Habilidades.css";

class Habilidades extends React.Component {
    render() {
        return(
            <div className="habilidade-container">
                {/*Nome da habilidade*/}
                <div>{this.props.nome}</div>
                
                {/* A barrinha em si */}
                <div className="barrinha-container"> 
                    {/*Parte preenchida*/ }
                    <div
                    className="preenchimentoBarrinha"
                    style={{backgroundColor: "#ffffff", flex:this.props.porcentagem}}
                    />
                    {/*Parte que falta*/ }
                    <div style={{flex: 100 - this.props.porcentagem}}/>
                </div>
            </div>
        );
    }
       
}
export default Habilidades;