import React from "react";
import { Link } from 'react-router-dom';


import './Categoria.css'
export default props => {
    return (
        <Link className="link" to={props.url}>
        <div className="categoria" style={{backgroundColor: props.color}}>
            <h4>{props.categoria}</h4>
        </div>
        </Link>
    )
}