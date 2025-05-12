import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import pionbasee from '../assets/IMAGES/pipurple.jpg'
import './About.css'
import Nav from 'react-bootstrap/Nav'


const About = () => {
    return(
        <div>
            <br></br>
            <br></br>
            <Container>
                <Nav.Link href="myAbout"></Nav.Link>
                <Row>
               <Col> <img src={pionbasee} className="imageedit rounded-circle"/> </Col>
               <Col style={{marginTop:"20px", marginRight:"10px", marginLeft:"25px", color:"Azure"}}> <h3 id="myAbout" 
               className="des fw-bold" 
               style={{fontFamily: "Segoe UI"}}> KEY FEAUTURES OF PI ON BASE </h3> 
               <ol className="fenal" >
      <li><p>InclusivityThe platform aims to make cryptocurrency more accessible and user-friendly.</p></li>
      <li><p>Scalable: Base's blockchain platform enables fast and scalable transactions.</p></li>
      <li><p> Community-driven: Pi Network Coin on Base prioritizes community involvement and governance.</p></li>
      <li><p>Secure: Pi Network Coin on Base utilizes advanced security measures to protect user assets.</p></li>
                  </ol>
               </Col>
                </Row>
            </Container>
            </div>
    )
    
}

export default About

