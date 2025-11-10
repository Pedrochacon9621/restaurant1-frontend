import { Link } from "react-router-dom"
export function Footer() {
    return(
        <div>
            <div className="divFooter">
                <div className="contentFooter1">
                    <div>
                        <p>© 2025 Pedro Chacón. Todos los derechos reservados.  </p><br/>
                        <Link to="/politica" target="_blank">🔗Politica de privacidad</Link>
                        <div className="divRedes">
                            <img src="/iconos/facebook.svg" alt="" />
                            <img src="/iconos/instagram_dark.svg" alt="" />
                            <img src="/iconos/x_dark.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h3>Enlaces</h3>
                        <p><Link to="/"> Inicio</Link></p>
                        <p><Link to="/menu"> Menús</Link></p>
                        <p><Link to="/contacto"> Contacto</Link></p>
                    </div>
                    <div>
                        <p><a href="#top"> Volver arriba</a></p>
                    </div>
                </div>
            </div> 
        </div>
    )
    
}