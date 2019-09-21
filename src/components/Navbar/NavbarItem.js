import React from "react";
import "./Navbar.css";

class NavbarItem extends React.Component{
  constructor(props){
      super (props)
  }   

    render(){
        return(
            <div className = "navbar-item">
                <h1>{this.props.title}</h1>
            </div>

        );
    }
}

export default NavbarItem;