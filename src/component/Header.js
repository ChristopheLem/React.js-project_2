import React from 'react'
import Img from "../images/profile_img.jpg";

function Header() {
  return (
    <header>
      <div id="myimg">
        <img src={Img} alt="photo de moi" />
      </div>
      <div id="title">
        <h1>
          <span className="firstname">CHRISTOPHE</span> <span className="light">LEMERCIER</span>
        </h1>
        <h2 className="bold">
          <span className="underline">Dével</span>oppeur web freelance
        </h2>
      </div>
    </header>
  );
}

export default Header