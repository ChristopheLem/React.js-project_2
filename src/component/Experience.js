import React from 'react'
function Experience() {
  return (
    <section id="experience">
      <h2>
        <i className="fas fa-briefcase"></i>EXPERIENCE PROFESSIONELLE
      </h2>
      <div className="container row">
        <p>
          <i className="far fa-dot-circle"></i>
          <span className="bold">
            2016 - 2019
            <br />
            <span className="align">Paris</span>
          </span>
        </p>
        <div className="experience">
          <h4 className="bold">ORANGE BLEUE</h4>
          <p>Educateur sportif</p>
          <p>
            Encadrement des cours collectifs de fitness
            <br />
            Animation du plateau cardio-musculation, en accompagnant les adhérents dans leur pratique (démonstrations, placements) et en concevant des programmes de musculation adaptés en fonction de leurs objectifs.
            <br />
            Accueil des prospects adhérents du club, présentation des différents espaces et des différentes prestations.
          </p>
        </div>
      </div>
      <div className="container row">
        <p>
          <i className="fas fa-circle"></i>
          <span className="bold">
            2013 - 2016
            <br />
            <span className="align">Paris</span>
          </span>
        </p>
        <div className="experience">
          <h4 className="bold">MAGIC FORM</h4>
          <p>Educateur sportif</p>
          <p>
            Encadrement des cours collectifs de fitness
            <br />
            Animation du plateau cardio-musculation, en accompagnant les adhérents dans leur pratique (démonstrations, placements) et en concevant des programmes de musculation adaptés en fonction de leurs objectifs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience