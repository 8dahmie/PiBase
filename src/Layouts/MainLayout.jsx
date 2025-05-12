import {Outlet} from "react-router-dom";
import React from "react";
import Navi from '../Components/Navi'


const MainLayout = () => {
    return (
        <div>
            {/* <body style={{backgroundColor:'rgb(60,40,120)'}}> */}
             <Navi/>
            <Outlet/>
           
            {/* </body> */}
        </div>
    )
}

export default MainLayout