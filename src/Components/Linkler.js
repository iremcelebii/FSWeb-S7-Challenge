import React from "react";
import { Link } from "react-router-dom";
import Kumpir from "./Yemekler/Kumpir";
import Pizza from "./Yemekler/Pizza";
import Burger from "./Yemekler/Burger";
import Cigkofte from "./Yemekler/Cigkofte";
import Evyemekleri from "./Yemekler/Evyemekleri";
import Salata from "./Yemekler/Salata";

export default function Linkler() {
  return (
    <nav className="menu">
      <Link to="/" id="order">
        <h2>Mutfaklar</h2>
      </Link>
      <div className="yemekler-anasayfa">
        <Link to="/pizza" id="pizza-form">
          <Pizza></Pizza>
        </Link>
        <Link to="/burger" id="burger-form">
          <Burger></Burger>
        </Link>
        <Link to="/kumpir" id="kumpir-form">
          <Kumpir></Kumpir>
        </Link>
        <Link to="/salata" id="salata-form">
          <Salata></Salata>
        </Link>
        <Link to="/evyemekleri" id="evyemekleri-form">
          <Evyemekleri></Evyemekleri>
        </Link>
        <Link to="/cigkofte" id="cigkofte-form">
          <Cigkofte></Cigkofte>
        </Link>
      </div>
    </nav>
  );
}
