import React from 'react';

import { Container } from './styles';
import { FaStar } from "react-icons/fa"

import starImg from "../../assets/mariostar.png"

function Competencias() {
  return (
    <Container>
      <header className="competitions">
        <div className="svg">
          <FaStar color="#fff"/>
        </div>
        <h3>Competencias</h3>
      </header>

      <line />

      <main>
        <div className="especification">
          <h3>Heroi</h3>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
        </div>

        <div className="especification">
          <h3>Heroi</h3>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
        </div>
        
        <div className="especification">
          <h3>Heroi</h3>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
        </div>

        <div className="especification">
          <h3>Heroi</h3>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
          <img src={starImg} alt=""/>
        </div>
      </main>
    </Container>
  );
}

export default Competencias;