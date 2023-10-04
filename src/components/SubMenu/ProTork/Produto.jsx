import React from "react";
import './Produto.css';
import Categoria from './Categoria/Categoria'

export default props => {
    return (
        <div className="MenuProTork">
            <img src="https://i.ibb.co/Qc2yHdX/protork.jpg" className="logoImg" alt="logo" />
            <div className="grid" >
            <Categoria categoria="Bauleto" />
            <Categoria categoria="Capacete" />
            <Categoria categoria="Reparo" />
            <Categoria categoria="Viseira" />
            
            </div>
        </div>
    )
}