import React from 'react'

function Footer() {
  return (
    <footer>
      <section id="recommendations">
        <h2>
          <i className="fas fa-pencil-alt"></i>RECOMMANDATIONS
        </h2>
        <div className="container">
          <div className="recommendation">
            <p className="bold">NICOLAS MARTEAU</p>
            <p className="bold">Développeur Web, Thales</p>
            <p className="bold">Téléphone:</p>
            <p>Email: nicolas.marteau@gmail.com</p>
          </div>
          <div className="recommendation">
            <p className="bold">CYRIL LEMERCIER</p>
            <p className="bold">Développeur Web, Abbeal</p>
            <p className="bold">Téléphone:</p>
            <p>Email: cyril.lemercier@gmail.com</p>
          </div>
        </div>
      </section>
      <section id="leisure">
        <h2>LOISIRS</h2>
        <div className="container">
          <i className="fas fa-futbol fa-2x"></i>
          <i className="fas fa-gamepad fa-2x"></i>
          <i className="fas fa-book-open fa-2x"></i>
        </div>
      </section>
    </footer>
  );
}

export default Footer