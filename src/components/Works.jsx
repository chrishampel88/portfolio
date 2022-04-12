import React from "react";
import style from "../styles/Works.module.css"
import Figure from "react-bootstrap/Figure"
import weather from "../assets/weather.jpeg"
import recipe from "../assets/recipe.jpeg" 
import RapiResto from "../assets/RapiResto.jpeg"  

export default function Works(){
    return(
        <div  id="works"className={style.section3}>
             <br />
            <h2> My works </h2>
             <div className={style.column}>
             <Figure>
               <h1>Weather-app</h1>
                <Figure.Image
                  width={400}
                  height={180}
                  alt="171x180"
                  src={weather}/>
                <Figure.Caption>
                aplicacion donde podemos buscar alguna ciudad y ver su temeratura actual.
                </Figure.Caption>
              </Figure>
            <Figure>
              <h1>Recipe Book -app </h1>
              <Figure.Image
                width={440}
                alt="171x180"
                src={recipe}/>
              <Figure.Caption>
              Trabajo individiual en el cual recivimos recetas de una API externa, y podemos crear recetas nuevas, filtrarlas por nombre o por raiting
              </Figure.Caption>
            </Figure>
            <Figure>
              <h1>RapiResto</h1>
              <Figure.Image
                width={400}
                alt="171x180"
                src={RapiResto}
              />
              <Figure.Caption>
              Trabajo en grupo(scrum) en el cual hicimos una pagina donde se pueden buscar restaurants en capital Federal(Bs.As, Argentina)
              </Figure.Caption>
            </Figure>
           
             </div>
        </div>
    )
}