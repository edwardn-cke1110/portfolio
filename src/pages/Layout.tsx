import { Outlet } from "react-router-dom";
import NavBar from "../global-components/NavBar/NavBar";
import XSNavBar from "../global-components/NavBar/XSNavBar";
import "./Layout.css"
import React from "react";

export default function Layout()
{
    const [width, setWidth] = React.useState(window.innerWidth);
    const xsBreakPoint = 450;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    })
    
    return(
        <div className="Page-layout">
            {width < xsBreakPoint ? <XSNavBar/> : <NavBar/>}
            <Outlet/>
        </div>
    )
}