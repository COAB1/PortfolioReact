import React from "react";
import MinhaFoto from "../../Images/eu.jpg";
import "./SobreMim.css";


class SobreMim extends React.Component {
    render() {
        return (
            <div className="sobre-mim-container">
                {/*Aqui vai ser a foto*/}
                <div className="foto-container">       
                    <img 
                    className="foto-perfil"
                    src={MinhaFoto} 
                    alt="Foto de perfil de Carol"
                    ></img>
                </div>

                {/*Aqui vai ser o texto*/}
                <div className="texto-container">
                    <p>
                        Eu sou Carol, estou estudando Python e hoje estou 
                        participando de um workshop de react. o/ Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
        );
    }
} 
export default SobreMim;