import React from 'react'

function Education() {
  return (
    <section id="education">
      <h2>
        <i className="fas fa-graduation-cap"></i>FORMATION
      </h2>
      <div className="container row">
        <p>
          <i className="far fa-dot-circle"></i>
          <span className="bold">
            2019 - 2020
            <br />
            <span className="align">Paris</span>
          </span>
        </p>
        <div className="education">
          <h4 className="bold">OPENclassNameROOMS</h4>
          <p>Formation développeur Web</p>
          <p>
            Assembler les pages en HTML5 et CSS3 à partir de maquettes graphiques
            <br />
            Intégrer des contenus textes, images, sons, vidéo dans le code HTML5
            <br />
            Respecter les normes d’accessibilité et de référencement du W3C
            <br />
            Assurer la compatibilité avec les différents navigateurs du marché
            <br />
            Mettre en place une communication entre client et serveur avec JavaScript
            <br />
            Organiser et gérer la base de données.
          </p>
        </div>
      </div>
      <div className="container row">
        <p>
          <i className="fas fa-circle"></i>
          <span className="bold">
            2012 - 2013
            <br />
            <span className="align">Paris</span>
          </span>
        </p>
        <div className="education">
          <h4 className="bold">EFICIENCIA</h4>
          <p>Formation éducateur sportif</p>
          <p>
            Approche biologique appliquée au sport
            <br />
            Méthodologie et pédagogie appliquées aux activitées du fitness
            <br />
            Méthodologie et pédagogie appliquées aux activitées de la musculation
            <br />
            Méthodologie et pédagogie appliquées à la communication
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education