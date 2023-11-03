import React, { useState } from "react";
import {Link} from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
const MenuCatalog =()=>{
    const [active,setActive]= useState(false)
    return(
        <li onMouseEnter={false} className="header__bottom-item">
                        <Link className="header__bottom-link" to='#' >
                          <div className="header__bottom-circle">
                            <CgMenuGridO/>

                        </div>
                        <p className="header__bottom-title">Все</p>
                        </Link>
                    </li>
    );
};
export default MenuCatalog;