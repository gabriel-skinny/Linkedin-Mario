import React from 'react';

import { Container, Main, Details } from './styles';

import luigiImg from "../../assets/browser.png"

function Perfil() {
  return (
    <Container>
      <div className="wrapper">
        <div className="image">
        </div>

        <Main>
          <div className="title">
            <h1>Super Mario</h1>
            <p>Encantador-Herói da Princesa</p>
            <p>Matador de Tartarugas</p>
          </div>

          <div className="details">
            <div className="conections">
              <h3>23.450</h3>
              <p>Conexões</p>
            </div>

            <line />

            <div className="conections">
              <h3>1.064</h3>
              <p>Visualização</p>
            </div>
          </div>

          <div className="buttons">
            <button>Seguir</button>
            <button className="transparent">Conectar</button>
          </div>
        </Main>
      </div>
      <Details>
        <div className="detail-content">
          <h1>Emprego Atual</h1>
          
          <div className="box">
            <img src={luigiImg} alt="img"/>

            <div className="title">
              <h4>Super Mario Odyssey</h4>
              <p>julho 2017 -atual</p>
            </div>
          </div>

          <h1>Anteriores</h1>

          <div className="box">
            <img src={luigiImg} alt="img"/>

            <div className="title">
              <h4>Super Mario Odyssey</h4>
              <p>julho 2017 -atual</p>
            </div>
          </div>
          <div className="box">
            <img src={luigiImg} alt="img"/>

            <div className="title">
              <h4>Super Mario Odyssey</h4>
              <p>julho 2017 -atual</p>
            </div>
          </div>
        
          <button type="submit">Carregar mais</button>
        </div>
      </Details>
    </Container>
  );
}

export default Perfil;