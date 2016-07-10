import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div id="aboutus">
                <p>
                    Somos amantes de la centenaria bebida refrescante conocida como Agua de Horchata, tradicional bebida mexicana que suele acompañar nuestros tacos o arracheras. A pesar de su fácil y conocida preparación, en Horchata.Club nos dimos la tarea de probar las mejores horchatas de la Ciudad de México, documentarlas y clasificarlas.
                </p>
                <p className="question">
                    ¿Qué es el agua de horchata?
                </p>
                <p>
                    Forma parte de las tradicionales aguas frescas mexicanas, junto con el agua de jamaica, tamarindo, limón y otras frutas típicas. El agua de horchata se prepara mezclando harina de arroz, azúcar blanca, canela, leche en polvo, vainilla y en ocasiones almendras, coco, y semillas de morro; Aunque la receta puede variar según la región y el gusto personal.
                </p>
                <p className="question">
                    ¿Dónde encontramos el agua de horchata?
                </p>
                <p>
                    Bebida enraizada en la cultura gastronómica mexicana, la encontramos en cualquier restaurante que se jacte de mexicano; comúnmente acompañada con tacos en días veraniegos, aunque no falta su presencia en el repertorio de la abuela y fiestas infantiles (y no tan infantiles).   
                </p>
            </div>
        );
    }
}

export default About;
