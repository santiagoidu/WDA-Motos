import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
//LS2
import ProdutoLs2 from "./components/SubMenu/Ls2/Produto"
//Peels
import ProdutoPeels from "./components/SubMenu/Peels/Produto"
//Bieffe
import ProdutoBieffe from "./components/SubMenu/Bieffe/Produto";
//SanMarino
import ProdutoSanMarino from "./components/SubMenu/SanMarino/Produto";
//Givi
import ProdutoGivi from "./components/SubMenu/Givi/Produto";
//ProTork
import ProdutoProTork from "./components/SubMenu/ProTork/Produto"
//X11
import ProdutoX11 from "./components/SubMenu/X11/Produto";
//Norisk
import ProdutoNorisk from "./components/SubMenu/Norisk/Produto";
//AGV
import ProdutoAgv from "./components/SubMenu/Agv/Produto";
//Shark
import ProdutoShark from "./components/SubMenu/Shark/Produto";
//Helt
import ProdutoHelt from "./components/SubMenu/Helt/Produto";
//RaceTech
import ProdutoRaceTech from "./components/SubMenu/RaceTech/Produto";
//Vaz
import ProdutoVaz from "./components/SubMenu/Vaz/Produto";
//MT
import ProdutoMT from "./components/SubMenu/MT/Produto";
//EBF
import ProdutoEBF from "./components/SubMenu/EBF/Produto";
//Mormaii
import ProdutoMormaii from "./components/SubMenu/Mormaii/Produto";
//Fly
import ProdutoFly from "./components/SubMenu/Fly/Produto"
//Tutto
import ProdutoTutto from "./components/SubMenu/Tutto/Produto"

export default _ => {
    return (

        <Routes>
            <Route element={<Menu />} path="/" exact />
            {/* LS2 sub menu e produtos */}
            <Route element={<ProdutoLs2 />} path="/subMenuLS2" />
            <Route element={<ProdutoX11 />} path="/CapaceteLs2" />
            {/* Peels sub menu e produtos */}
            <Route element={<ProdutoPeels />} path="/subMenuPeels" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Bieffe sub menu e produtos */}
            <Route element={<ProdutoBieffe />} path="/subMenuBieffe" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* San Marino sub menu e produtos */}
            <Route element={<ProdutoSanMarino />} path="/subMenuSanMarino" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Givi sub menu e produtos */}
            <Route element={<ProdutoGivi />} path="/subMenuGivi" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* ProTork sub menu e produtos */}
            <Route element={<ProdutoProTork />} path="/subMenuProTork" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* X11 sub menu e produtos */}
            <Route element={<ProdutoX11 />} path="/subMenuX11" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Norisk sub menu e produtos */}
            <Route element={<ProdutoNorisk />} path="/subMenuNorisk" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* AGV sub menu e produtos */}
            <Route element={<ProdutoAgv />} path="/subMenuAgv" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Shark sub menu e produtos */}
            <Route element={<ProdutoShark />} path="/subMenuShark" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Helt sub menu e produtos */}
            <Route element={<ProdutoHelt />} path="/subMenuHelt" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* RaceTech sub menu e produtos */}
            <Route element={<ProdutoRaceTech />} path="/subMenuRaceTech" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Vaz sub menu e produtos */}
            <Route element={<ProdutoVaz />} path="/subMenuVaz" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* MT sub menu e produtos */}
            <Route element={<ProdutoMT />} path="/subMenuMT" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* EBF sub menu e produtos */}
            <Route element={<ProdutoEBF />} path="/subMenuEBF" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Mormaii sub menu e produtos */}
            <Route element={<ProdutoMormaii />} path="/subMenuMormaii" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Fly menu e produtos */}
            <Route element={<ProdutoFly />} path="/subMenuFly" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />
            {/* Tutto menu e produtos */}
            <Route element={<ProdutoTutto />} path="/subMenuTutto" />
            <Route element={<ProdutoX11 />} path="/produtoX11" />


        </Routes>

    )
}
