import React from 'react';

import { Container } from './styles';
import { FaFileAlt } from "react-icons/fa"

import marioImg from "../../assets/mariohandsup.png"

function Biografia() {
  return (
    <Container>
      <header>
        <div className="svg">
          <FaFileAlt color="#fff"/>
        </div>
        <h3>Biografia</h3>
      </header>

      <line />

      <main>
        <p>
          Continualy optimize best-of-breed-intelectual capital
          rather than function users. Globally implmennt multimedia
          based resources rather than user friendly deliverables.
          Credibly integrate quality e-commerce through resource sucking.
        </p>

        <img src={marioImg} alt="mario"/>
      </main>
    </Container>
  );
}

export default Biografia;