import React from "react";
import './Produto.css';
import Categoria from './Categoria/Categoria'

export default props => {
    return (
        <div className="MenuMormaii">
            <img src="https://i.ibb.co/8D546rf/mormaii.jpg" className="logoImg" alt="logo" />
            <div className="grid" >
            <Categoria categoria="Capacete" />
            <Categoria categoria="Reparo" />
            <Categoria categoria="Viseira" />
            </div>
        </div>
    )
}