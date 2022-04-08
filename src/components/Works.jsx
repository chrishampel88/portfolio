import React from "react";
import style from "./Works.module.css"

export default function Works(){
    return(
        <div  id="works"className={style.section3}>
             <br /><br /><br />
            <h2> My works </h2>
             <div className={style.column}>

                <div className={style.works}>
                    <h1>Wather-app</h1>
                    <img src="https://i9.ytimg.com/vi/e4RiiDIu2L4/mq1.jpg?sqp=CLiG1JEG&rs=AOn4CLD2oHizrFwLnSRwNyCCLa1_tni51g" alt="" />
                    <p>aplicacion donde podemos buscar alguna ciudad y ver su temeratura actual.</p>
                </div>
                <div className={style.works}>
                    <h1> Recipe book -app <a href="https://youtu.be/e4RiiDIu2L4">video</a></h1>
                    
                    <img src="https://i9.ytimg.com/vi/e4RiiDIu2L4/mq1.jpg?sqp=CLiG1JEG&rs=AOn4CLD2oHizrFwLnSRwNyCCLa1_tni51g" alt="" />
                    <p>Trabajo individiual en el cual recivimos recetas de una API externa, y podemos crear recetas nuevas, filtrarlas por nombre o por raiting</p>
                </div>
                <div className={style.works}>
                    <h1>RestoRapi -app</h1>
                    <img src="https://i9.ytimg.com/vi/e4RiiDIu2L4/mq1.jpg?sqp=CLiG1JEG&rs=AOn4CLD2oHizrFwLnSRwNyCCLa1_tni51g" alt="" />
                    <p>Trabajo en grupo(scrum) en el cual hicimos una pagina donde se pueden buscar restaurants en capital Federal(Bs.As, Argentina) </p>
                </div>
                <div className={style.works}>
                    <h1>RestoRapi -app</h1>
                    <img src="https://i9.ytimg.com/vi/e4RiiDIu2L4/mq1.jpg?sqp=CLiG1JEG&rs=AOn4CLD2oHizrFwLnSRwNyCCLa1_tni51g" alt="" />
                </div>
                
                <div className={style.works}>
                    <h1>RestoRapi -app</h1>
                    <img src="https://i9.ytimg.com/vi/e4RiiDIu2L4/mq1.jpg?sqp=CLiG1JEG&rs=AOn4CLD2oHizrFwLnSRwNyCCLa1_tni51g" alt="" />
                </div>
                
                <div className={style.works}>
                    <h1>RestoRapi -app</h1>
                    <img src="https://i9.ytimg.com/vi/e4RiiDIu2L4/mq1.jpg?sqp=CLiG1JEG&rs=AOn4CLD2oHizrFwLnSRwNyCCLa1_tni51g" alt="" />
                </div>
                <div className={style.works}>
                    <h1>RestoRapi -app</h1>
                    <img src="https://i9.ytimg.com/vi/e4RiiDIu2L4/mq1.jpg?sqp=CLiG1JEG&rs=AOn4CLD2oHizrFwLnSRwNyCCLa1_tni51g" alt="" />
                </div>
                <div className={style.works}>
                    <h1>RestoRapi -app</h1>
                    <img src="https://i9.ytimg.com/vi/e4RiiDIu2L4/mq1.jpg?sqp=CLiG1JEG&rs=AOn4CLD2oHizrFwLnSRwNyCCLa1_tni51g" alt="" />
                </div>
                

             </div>
        </div>
    )
}