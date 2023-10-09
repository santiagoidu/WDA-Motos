import React from "react";
import './Produto.css';
import Categoria from './Categoria/Categoria'

export default props => {
    return (
        <div className="MenuTutto">
            <img src="https://i.ibb.co/CMWzxCm/Tutto.jpg" className="logoImg" alt="logo" />
            <div className="grid" >
            <Categoria categoria="Capacete" />
            <Categoria categoria="Reparo" />
            <Categoria categoria="Viseira" />
            </div>
        </div>
    )
}