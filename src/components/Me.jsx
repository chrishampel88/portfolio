import React from "react";
import style from "./Me.module.css"

export default function Me(){
    return(
        <div id='Me'className={style.section1}>
                        <div className={style.sec1}>
                            <div className={style.text}>
                                <h2>Hello! My name is Christian, I am 33 years old. About a year ago I decided to turn my life around, and I started studying programming, something that always interested me but I never gave it the opportunity. In the middle of 2021 I decided to do the SoyHenry bootcamp, and I managed to finish it and get my FULL STACK DEVELOPER certificate. Now I'm still studying new subjects and hoping to find the job that gives me the opportunity to show what I've learned. </h2>
                            </div>
                            <div className={style.img}>
                            <img className={style.img} src="https://avatars.githubusercontent.com/u/80498051?v=4" alt="me" />
                            </div>
                        </div>
                    </div>
    )
}