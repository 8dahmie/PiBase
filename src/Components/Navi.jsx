import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pionbasee from '../assets/IMAGES/piblue.jpg';
import './Navi.css'

function Navi() {
  return (
    <Navbar expand="lg">
      <Container className='p-4'>
        <Navbar.Brand href="#home">
              <img src={pionbasee} className="editim rounded-circle"/>
              <h2 className='fw-bold' style={{marginLeft:"58px",
                 marginTop:"-55px",
                 fontFamily:'Algerian',
                 color: 'azure',
                 fontSize: '50px',}}> PI </h2>
                 <h4 style={{marginLeft:"110px", 
                    marginTop:"-40px",
                    color:"gainsboro",
                    fontFamily:"Segoe UI",
                    }}> On Base </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='pursh fw-bold' style={{
            color:"#c39e9e"}}>HOME</Nav.Link>
            <Nav.Link href="#myAbout" className='fw-bold' style={{color:"#c39e9e"}}>ABOUT</Nav.Link>
            <Nav.Link href="#mySocials" className='fw-bold' style={{color:"#c39e9e"}}>SOCIALS</Nav.Link>
             <Nav.Link href="#mySocials" className='fw-bold' style={{color:"#c39e9e"}}>COPY CA</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
        

// className="bg-body-tertiary"

// export default Navi

// import React from "react";


// const Navi = () => {
// return (





//               
//         <ul className="navbar-nav">
//              <button type="button"
//                         className="btn">
//                       <li className="nav-item">
//                         <a className="nav-link active fw-bold" 
//                         aria-current="page" 
//                         href="#"
//                         style={{color:"#c39e9e"}}>HOME</a>
//                       </li>
//                       </button>


                              
//                     <button type="button"
//                     className="btn" id="aboutPi">
//                       <li className="nav-item">
//                         <a className="nav-link fw-bold"
//                         style={{color:"#c39e9e"}}
//                         href="#myAbout">ABOUT</a>
//                       </li>
//                     </button>


//                      <button type="button"
//                     className="btn">
//                       <li className="nav-item">
//                         <a className="nav-link fw-bold"
//                         style={{color:"#c39e9e"}}
//                         href="#mySocials">SOCIALS</a>
//                       </li>
//                     </button>



//                       </ul>
//                       </div>
//                       </div>
// </div>
// </div>
// </nav>

