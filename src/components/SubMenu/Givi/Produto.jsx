import React from "react";
import './Produto.css';
import Categoria from "./Categoria/Categoria";

export default props => {
    return (
        <div className="MenuGivi">
            <img src="https://i.ibb.co/vsqbyZK/givi-1.jpg" alt="logo" />
            <div className="grid" >
                <Categoria categoria="Bauleto" />
                <Categoria categoria="Bagageiro" />
                <Categoria categoria="Capacete" />
                <Categoria categoria="Encosto" />
            </div>
        </div>
    )
}