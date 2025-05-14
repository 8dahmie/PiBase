import React from "react"
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import './Socialss.css'
import Nav from 'react-bootstrap/Nav'

const Socials = () => {
    return(
        <div>
             <br></br>
            <br></br>
        <Container>
       <Nav.Link href="mySocials">
         <h1 className="fs-1 text-center display-1 text-decoration-underline"
         id="mySocials"
       style={{color: "azure",
       fontFamily:"Bodoni MT Black"}}> SOCIALS </h1>
       <br></br>
         </Nav.Link>
       <Link to="#">
       <button type="button" className="fs-1 btn btn-primary"
       style={{padding:"1px 60px", marginLeft:"31px"}}>
        <FaTelegramPlane />
    </button>
   </Link>

   
       <Link to="https://t.me/PiAnnouncements">
       <button type="button" className="fs-1 btn btn-secondary"
       style={{padding:"1px 60px", marginLeft:"60px"}}>
        <FaXTwitter />
    </button>
   </Link>
        </Container>
        </div>
    )
    
}

export default Socials

