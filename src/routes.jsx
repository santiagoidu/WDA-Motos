import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
//LS2
import ProdutoLs2 from "./pages/SubMenu/Ls2/Produto"
import CapaceteLs2 from "./pages/SubMenu/Ls2/Categoria/Capacete/Capacete"
//Peels
import ProdutoPeels from "./pages/SubMenu/Peels/Produto"
//Bieffe
import ProdutoBieffe from "./pages/SubMenu/Bieffe/Produto";
//SanMarino
import ProdutoSanMarino from "./pages/SubMenu/SanMarino/Produto";
//Givi
import ProdutoGivi from "./pages/SubMenu/Givi/Produto";
//ProTork
import ProdutoProTork from "./pages/SubMenu/ProTork/Produto"
//X11
import ProdutoX11 from "./pages/SubMenu/X11/Produto";
//Norisk
import ProdutoNorisk from "./pages/SubMenu/Norisk/Produto";
//AGV
import ProdutoAgv from "./pages/SubMenu/Agv/Produto";
//Shark
import ProdutoShark from "./pages/SubMenu/Shark/Produto";
//Helt
import ProdutoHelt from "./pages/SubMenu/Helt/Produto";
//RaceTech
import ProdutoRaceTech from "./pages/SubMenu/RaceTech/Produto";
//Vaz
import ProdutoVaz from "./pages/SubMenu/Vaz/Produto";
//MT
import ProdutoMT from "./pages/SubMenu/MT/Produto";
//EBF
import ProdutoEBF from "./pages/SubMenu/EBF/Produto";
//Mormaii
import ProdutoMormaii from "./pages/SubMenu/Mormaii/Produto";
//Fly
import ProdutoFly from "./pages/SubMenu/Fly/Produto"
//Tutto
import ProdutoTutto from "./pages/SubMenu/Tutto/Produto"

export default _ => {
    return (

        <Routes>
            <Route element={<Menu />} path="/" exact />
            {/* LS2 sub menu e produtos */}
            <Route element={<ProdutoLs2 />} path="/subMenuLS2" />
            <Route element={<CapaceteLs2 />} path="/subMenuLS2/CapaceteLs2" />
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
