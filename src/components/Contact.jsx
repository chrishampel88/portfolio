
import style from '../styles/Contact.module.css';
import Button from 'react-bootstrap/Button';
import CV from '../assets/cv-Chris.jpg' 

export default function Contact(){
    return(
        <div id="contact"className={style.section4}>

        <div className={style.div}>
<br /><br /><br />
            <h1>If you want to contact me you can do it through:</h1>
            <br /><br /><br />
            <h2 >
                <img className={style.logo} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <a className={style.link} rel="noreferrer" href="https://www.linkedin.com/in/christian-hampel88/" target="_blank"> Linkedin</a>
            </h2 >
            <h2 >
                <img className={style.logo} src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" />
                <a className={style.link} rel="noreferrer" href="https://github.com/chrishampel88" target="_blank"> Github</a>
            </h2> 
            <h2 >
                <img className={style.logo} src="https://cdn-icons-png.flaticon.com/128/2164/2164894.png" alt="" />
                <a className={style.link} rel="noreferrer" href="mailto:christianhampel88@gmail.com" target="_blank"> E-mail</a>
            </h2>
        </div>
             <br />
        <Button variant="Light">
            <a href={CV} download>Download CV</a>
            </Button>
        </div>
    )
}