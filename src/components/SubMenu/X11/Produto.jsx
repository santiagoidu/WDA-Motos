import React from "react";
import './Produto.css';
import Categoria from './Categoria/Categoria'

export default props => {
    return (
        <div className="MenuX11">
            <img src="https://i.ibb.co/T2m4Kjr/Sem-t-tulo.png" className="logoImg" alt="logo" />
            <div className="grid" >
            <Categoria categoria="2º Pele" />
            <Categoria categoria="Botas" />
            <Categoria categoria="Calças" />
            <Categoria categoria="Capacete" />
            <Categoria categoria="Jaquetas" />
            <Categoria categoria="Luvas" />
            <Categoria categoria="Meias" />
            <Categoria categoria="Protetor" />
            
            </div>
        </div>
    )
}