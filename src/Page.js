import React from "react";
import './css/Sidebar.css';
import Sidebar from "./components/sidebar";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboards";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";


const Page = () => {
    return(
       <BrowserRouter>
       <Sidebar>
        <Routes>
            <Route paths="/"element={<Dashboard/>}/>
            <Route paths="/Home"element={<Home/>}/>
            <Route paths="/About"element={<About/>}/>
            <Route paths="/Product"element={<Product/>}/>
        </Routes>
        </Sidebar>
       </BrowserRouter>
    );
};
export default Page;