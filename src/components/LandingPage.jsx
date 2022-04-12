import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/LandingPage.module.css"


export default function LandingPage(){
return(
    <div className={style.container}>
     <div className={style.text}>
        <h1 className={style.title}>Hi, I'm Christian and this is me.</h1>
        <Link to= '/home'>
            <button>Enter to my world!</button>
        </Link>
     </div>
     
    </div>
)
}