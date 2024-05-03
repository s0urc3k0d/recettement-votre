import React from 'react';

import './presentation.scss'

const presentation_title = 'Qui suis-je ?';
const presentation_description = 'Je m\'appelle Alexandre, 30 ans, et je suis un passioné de cuisine ! J\'ai décidé de développer cette application web de cuisine dans le but de stocker et de partager mes recettes favorites avec tous les petits curieux culinaires !';

const PresentationSection = () => (
  <div className='presentation_container'>
    <h2 className='presentation_container_title'>{presentation_title}</h2>
    <p className='presentation_container_content'>{presentation_description}</p>
  </div>
);
export default PresentationSection;
