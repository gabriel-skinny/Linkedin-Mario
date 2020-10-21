import React from 'react';

import { Container, Tab } from "./styles";
import { FaHome, FaLinkedinIn, FaUsers, FaBriefcase, FaBullhorn, FaComments } from "react-icons/fa"
import starImg from "../../assets/starImg.png"

function Aside() {
  return (
    <Container>
      <Tab>
        <li>
          <div className="logo">
          <FaLinkedinIn color="#0870fd" size={40} />
        </div>
        </li>
        <li>
          <div className="svg">
            <FaHome size={20} />
          </div>
          <h4>Inicio</h4>
        </li>
        <li>
          <div className="svg">
            <FaUsers size={20} />
          </div>
          <h4>Minha rede</h4>
        </li>
        <li>
         <div className="svg">
          <FaBriefcase size={20} />
         </div>
          <h4>Vagas</h4>
        </li>
        <li className="warnings">
          <div className="mesagens">
            <FaBullhorn color="#5b6163"/>
          </div>
          <div className="mesagens">
            <FaComments color="#5b6163"/>
          </div>
        </li>
        <li className="star">
          <div className="svgStar">
            <img src={starImg} alt="star"/>
          </div>
          <h1>SEJA PREMIUM</h1>
        </li>
      </Tab>
    </Container>
  );
}

export default Aside;