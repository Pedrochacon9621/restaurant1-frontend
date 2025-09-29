export function Contacto() {
    return(
        <div className="main1">
           <div className="content1-flex" style={{marginTop:"50px", gap:"40px"}}>
                <div className="descripcionImg2">
                    <h1 className="tituloCat"> Contáctanos</h1><br /><br />
                    <h2>📍 Dirección:</h2>
                    <p>Carrer del Sabor, 12, 08551 Tona, Barcelona</p><br />
                    <h2>📱 Teléfono:</h2>
                    <p>+34 932 123 456</p><br />
                    <h2>📧 Correo electrónico:</h2>
                    <p>contacto@restaurantesabor.com</p><br />
                    <h2>⏰ Horario de atención:</h2>
                    <p>Lunes a sábado: 12:30h – 23:00h</p>
                    <p>Domingos: cerrado</p><br />
                    <h2>📲 Redes sociales:</h2>
                    <p>Síguenos en Instagram y Facebook para descubrir nuestros platos del día, eventos especiales y novedades.</p>
                </div>
                <div className="contentImg1 contentImg1-abajo">
                    <img src="/img/contacto3.webp" alt="" />
                </div>
            </div>
        </div>
    )
}