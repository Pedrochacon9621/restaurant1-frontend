import { useState } from "react";
import { NavLink } from "react-router-dom";
export function Nav() {
   const [menuVisible, setMenuVisible] = useState(false);

  function mostrarMenu2() {
    setMenuVisible(prev => !prev);
}
    return(
        <div>
            <nav className="nav1">
                <div className="contentHeader">
                </div>
                <div id="hamburger" onClick={mostrarMenu2}>
                    <img style={{marginLeft:"25px"}} src="/iconos/menu-2.svg" alt=""/>
                    <ul className={`menu2 ${menuVisible ? 'visible' : 'hidden'}`}>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/menu">Menús</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                    </ul>
                </div>
                    <ul className="menu1">
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="menu">Menús</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                    </ul>
                </nav>
        </div>
    )
}