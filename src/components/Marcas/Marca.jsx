import React from "react";
import { Link } from 'react-router-dom';


import './Marca.css'
export default props => {
    return (
        <Link to={props.url}>
        <div className="marca" style={{backgroundColor: props.color, borderColor: "#000000"}}>
            <img className="imgLogo" src={props.link} />
        </div>
        </Link>
    )
}