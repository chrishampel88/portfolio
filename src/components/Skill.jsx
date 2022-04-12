import React from "react"
import style from "../styles/Skill.module.css"
import Figure from "react-bootstrap/Figure"

export default function Skill(){
    return(
        <div id="skills" className={style.section2}>
              <br /><br /><br />
            <h1 >My skills</h1>
            <br/>
                <Figure>
                    <Figure.Image
                    width={400}
                    alt="171x180"
                    src="http://www.cursosgis.com/wp-content/uploads/2017/06/lenguajes_1.png"
                    />  
                </Figure>
                <Figure>
                    <Figure.Image
                    width={600}
                    alt="171x180"
                    src="https://miro.medium.com/max/600/1*CiYzhVhFjqI6QH72xETY1A.jpeg"
                    />  
                </Figure>
                <Figure>
                    <Figure.Image
                        width={400}
                        alt="171x180"
                        src="https://funix.edu.vn/wp-content/uploads/2021/09/expressjs-v%C3%A0-nodejs.png"
                    />  
                </Figure>
                <Figure>
                    <Figure.Image
                        width={300}
                        alt="171x180"
                        src="http://blog.desafiolatam.com/wp-content/uploads/2018/05/php-logo.png"
                    />  
                </Figure>
                <Figure>
                    <Figure.Image
                        width={400}
                        alt="171x180"
                        src="https://alvaroperdiz.com/images/headers/postgresql.png"
                    />  
                </Figure>
            

    </div>
    )
}