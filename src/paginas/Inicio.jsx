import { Slider1 } from "../componentes/Slider1"
export function Inicio() {
    return(
        <div className="main1">
            <Slider1/>
            <div className="content1-flex" style={{marginTop:"50px"}}>
                <div className="contentImg1">
                    <img src="/img/preparando2.jpg" alt="" />
                </div>
                <div className="descripcionImg">
                    <h1 style={{textAlign:"center"}}> Bienvenidos a un lugar donde la comida se convierte en arte</h1><br />
                    <p>En nuestro restaurante, cada plato cuenta una historia. Una historia de ingredientes frescos, de manos expertas, y de pasión por la cocina. Nos enorgullece ofrecerte una experiencia gastronómica donde la calidad no es una promesa, sino una realidad que se saborea en cada bocado.</p>
                    <p>Nuestros chefs auténticos maestros culinarios combinan técnica, creatividad y dedicación para preparar cada comida como si fuera la más importante del día. Desde los sabores más tradicionales hasta las propuestas más innovadoras, cada receta se elabora con entusiasmo, respeto por el producto y un profundo amor por lo que hacemos.</p>
                    <p>Aquí no solo cocinamos: celebramos el placer de comer bien. Porque sabemos que la buena comida no solo alimenta el cuerpo, sino también el alma.</p>
                    <p>Prepárate para disfrutar de una cocina que despierta los sentidos, en un ambiente acogedor donde cada detalle está pensado para que te sientas como en casa.</p>
                    
                </div>
            </div>

            <div className="content1-flex" style={{marginTop:"50px"}}>
                <div className="descripcionImg">
                    <h1 style={{textAlign:"center"}}> Un ambiente que invita a quedarse</h1><br />
                    <p>En nuestro restaurante, no solo cuidamos lo que llega a tu mesa, sino también lo que sientes al cruzar la puerta. Hemos creado un espacio cálido y elegante donde cada detalle está pensado para que te relajes, disfrutes y te sientas como en casa.</p>
                    <p>La luz, la música, los aromas… todo se combina para ofrecerte una experiencia envolvente, donde el tiempo parece detenerse y cada momento se saborea con calma.</p>
                    <p>Nuestro equipo de atención al cliente está formado por personas apasionadas por el servicio. Te recibirán con una sonrisa genuina, te acompañarán con cercanía y respeto, y estarán atentos a cada necesidad sin invadir tu espacio. Porque creemos que la buena atención no es solo eficiencia, sino empatía, amabilidad y el deseo sincero de que vivas una experiencia memorable.</p>
                    <p>Ya sea que vengas a celebrar, a compartir, o simplemente a disfrutar de una buena comida, aquí encontrarás un ambiente que abraza y una atención que cuida.</p>
                </div>
                <div className="contentImg1 contentImg1-abajo">
                    <img src="/img/ambiente1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}