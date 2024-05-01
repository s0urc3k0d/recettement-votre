import React from 'react';
import { Link } from 'react-router-dom';
import BannerComponent from '../../components/banner/banner';
import './home.scss';

$title_home = 'Bienvenue sur Recettement Votre !';

const HomePage = () => {
  return (
    <div>
      <header>
        
      </header>
      <BannerComponent title={title_home} />
      <div className="presentation">
        <p>
          Nous sommes ravis de vous accueillir sur notre site dédié à la cuisine. Vous y trouverez de nombreuses recettes, des conseils et astuces pour réussir vos plats à tous les coups. Bonne navigation!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
