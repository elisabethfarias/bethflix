import React from 'react';
import bethflix from '../../assets/img/bethflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={bethflix} alt="Bethflix logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">  
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;