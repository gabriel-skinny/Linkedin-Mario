import React from 'react';

import { Container, Header, Footer, Input, Main } from './styles';
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, 
        FaInstagram, FaTwitch, FaFacebookF, FaSearch } from "react-icons/fa"

import Aside from "../../components/Aside"
import Perfil from '../../components/Perfil';
import Biografia from '../../components/Biografia';
import Visits from '../../components/Visits';
import Competencias from '../../components/Competencias';

function Home() {
  return (
    <Container>
      <Aside />
      <Header>

          <div className="content">
            
            <Input>
              <input type="text" placeholder="Pesquisar no linkedin"/>
              <div className="search">
                <FaSearch color="#0870fd"/>
              </div>
            </Input>

            <Footer>
              <li>
                <div className="image">
                  <FaCalendarAlt color="#fff"/>
                </div>
                <h4>25 de Fev</h4>
              </li>
              <li>
                <div className="image">
                  <FaMapMarkerAlt color="#fff" />
                </div>
                <h4>Quioto-Japão</h4>
              </li>
              <li>
                <div className="image">
                  <FaGraduationCap color="#fff"/>
                </div>
                <div className="description">
                  <h4>Instituto Nintendo</h4>
                  <small>1.994-2.000</small>
                </div>
              </li>
              <li className="social-media">
                <div className="image">
                  <FaFacebookF color="#fff"/>
                </div>
                <div className="image">
                  <FaInstagram color="#fff"/>
                </div>
                <div className="image">
                  <FaTwitch color="#fff"/>
                </div>
              </li>
            </Footer>
          </div>

          <Perfil />
        </Header>
    
      
      <Main>
        <div className="top">
          <Biografia/>
          <Visits />
        </div>
        <Competencias />
      </Main>
    </Container>
  );
}

export default Home;