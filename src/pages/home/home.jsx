import React from 'react';
import { Link } from 'react-router-dom';
import BannerComponent from '../../components/banner/banner';
import HeaderNavComponent from '../../components/headerNav/headerNav';
import HeaderComponent from '../../components/header/header';
import PresentationSection from '../../sections/presentation/presentation';

import './home.scss';

const header_title_home = 'Bienvenue sur Recettement Votre !';
const header_content_home = 'Je suis ravis de vous accueillir sur mon site dédié à la cuisine. Vous y trouverez de nombreuses recettes, des conseils et astuces pour réussir vos plats à tous les coups. Bonne navigation!';


const HomePage = () => {
  return (
    <div>
      <HeaderComponent header_title={header_title_home} header_content={header_content_home}/>
      <HeaderNavComponent />
      <BannerComponent title='Présentation'/>
      <PresentationSection />
    </div>
  );
}

export default HomePage;
