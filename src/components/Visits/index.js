import React from 'react';

import { Container, Main } from './styles';
import { FaEye } from "react-icons/fa"


function Visits() {
  return (
    <Container>
      <header>
        <div className="svg">
          <FaEye color="#fff"/>
        </div>
        <h3>Visitaram seu perfil</h3>
      </header>
      
      <line />
      
      <Main>
        <div className="perfil">
          <div className="image" />
          
          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
        
        <div className="perfil">
          <div className="image" /> 
          
          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
        
        <div className="perfil">
          <div className="image" />
          
          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
        
        <div className="perfil">
          <div className="image" />
          
          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
        
        <div className="perfil">
          <div className="image" />

          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
        
        <div className="perfil">
          <div className="image" />

          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
        
        <div className="perfil">
          <div className="image" />

          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
        
        <div className="perfil">
        <div className="image" />
          
          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
        
        <div className="perfil">
          <div className="image" />
        
          <div className="detail">
            <h4>Luigi </h4>
            <p>Encantador</p>
          </div>
        </div>
      </Main>
    </Container>
  );
}

export default Visits;