import React from "react";
import './Produto.css';
import Categoria from './Categoria/Categoria'


export default props => {
    return (
        <div className="MenuTutto">
            <img src="https://i.ibb.co/CMWzxCm/Tutto.jpg" className="logoImg" alt="logo" />
            <div className="grid" >
            <Categoria categoria="Capacete" url="https://api.whatsapp.com/send?phone=5531995350522&text=Gosataria%20de%20ver%20quais%20os%20modelos%20de%20capacete%20da%20marca%20*Tutto*%20voce%20tem%20disponivel%20"/>
            <Categoria categoria="Reparo" url="https://api.whatsapp.com/send?phone=5531995350522&text=Gosataria%20de%20ver%20quais%20os%20modelos%20de%20viseira%20da%20marca%20*Tutto*%20voce%20tem%20disponivel%20"/>
            <Categoria categoria="Viseira" url="https://api.whatsapp.com/send?phone=5531995350522&text=Gosataria%20de%20ver%20quais%20os%20modelos%20de%20viseira%20da%20marca%20*Tutto*%20voce%20tem%20disponivel%20"/>
            </div>
        </div>
    )
}