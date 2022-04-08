import React from "react"
import style from "./Skill.module.css"

export default function Skill(){
    return(
        <div id="skills" className={style.section2}>
                <br/><br/><br></br><br/>
        <h2 >My skills</h2><br/>
        <ul className={style.list}>
            <li><img className={style.html} src="http://www.cursosgis.com/wp-content/uploads/2017/06/lenguajes_1.png" alt="" /></li>
             </ul>
        <ul className={style.list}>
            <li><img className={style.react} src="https://miro.medium.com/max/600/1*CiYzhVhFjqI6QH72xETY1A.jpeg" alt="" /></li>                      
            <li><img className={style.node} src="https://funix.edu.vn/wp-content/uploads/2021/09/expressjs-v%C3%A0-nodejs.png" alt="" /></li>
        </ul>
        <br />
        <ul className={style.list}>
            <li><img className={style.php} src="http://blog.desafiolatam.com/wp-content/uploads/2018/05/php-logo.png" alt="" /></li>                          
            <li><img className={style.sql} src="https://alvaroperdiz.com/images/headers/postgresql.png" alt="" /></li>                          
        </ul>
    </div>
    )
}