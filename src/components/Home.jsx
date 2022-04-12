import React from "react";
import Navbarh from "./Navbar.jsx";
import Works  from "./Works.jsx";
import Skill from "./Skill.jsx";
import Me from "./Me.jsx";
import style from "../styles/Home.module.css";
import Contact from "./Contact.jsx";

export default function Home() {

    return (
        <div>
            <div className={style.navbar}>
                <Navbarh fixed="top"/>
            </div>
                <Me />     
                <Skill />
                <Works />                    
                <Contact />
            </div>
    )
    

}

