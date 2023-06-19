import React from "react";
import Pricing from "../Pricing/Pricing";
import images from "./../../Images/index";
import Booking from "./../Form/Booking";
import "./Home.css";

const Home = () => {
  const {hero, photoshoot, vertical, dinner, cake,} = images;
  return (
    <>
      {/* Hero Section */}
      <div className="">
        <div className="">
          <img src={hero} className="" alt="hero" />
          <div className="">
            <h1 className="">
              Wandelen met alpaca is een unieke belevenis.
            </h1>
            <hr className="" />
            <p className="">
              En neen, je hoeft er niet voor naar het Andes-gebergte want vanuit
              Sanapolis in Sijsele-Damme kan je genieten van deze uitzonderlijke
              ervaring. Alpaca’s zijn bijzonder gevoelige én intelligente
              dieren. Bovendien bezorgt een wandeling met alpaca’s je een leuk
              en ontspannen gevoel. Zin in meer? Bekijk onze formules en boek
              direct online.
            </p>
            <button className="btn-body site-btn">BEKIJK FORMULES </button>
          </div>
        </div>
      </div>
      {/* End of Hero Section */}
      {/* Second section */}
      <div className="hero section py-5 md:py-7">
        <div className="hero-content flex-col md:flex-row md:pl-24 md:gap-16 lg:pl-36 md:pr-20 lg:flex-row lg:gap-20">
          <img src={vertical} className="w-96 md:w-52 lg:w-80 shadow-2xl" alt="hero" />
          <div className="lg:mr-16">
            <h1 className="text-3xl lg:text-5xl">Wandelingen</h1>
            <p className="py-2 text-sm lg:text-xl font-bold sub">
              Een ontspannende tocht
            </p>
            <p className=" text-xs py-4 font-semibold lg:text-base">
              En neen, je hoeft er niet voor naar het Andes-gebergte want vanuit
              Sanapolis in Sijsele-Damme kan je genieten van deze uitzonderlijke
              ervaring. Alpaca’s zijn bijzonder gevoelige én intelligente
              dieren. Bovendien bezorgt een wandeling met alpaca’s je een leuk
              en ontspannen gevoel. Zin in meer? Bekijk onze formules en boek
              direct online.
            </p>
            <button className="btn-body site-btn">BEKIJK FORMULES </button>
          </div>
        </div>
      </div>
      {/* End of Second Section */}
      {/* Pricing */}
      <Pricing></Pricing>
      {/* End of Pricing */}
      {/* Dining Section */}
      <div className="hero section py-10 lg:h-screen">
        <div className="flex-col md:flex-row-reverse md:flex md:gap-10 lg:flex-row-reverse">
          <div className="flex gap-5 justify-center md:justify-end md:items-center md:mr-5 lg:mr-28 lg:ml-24">
          <img src={dinner} className="shadow-2xl w-32 md:w-48 lg:w-72 md:h-40 lg:h-64" alt="hero" />
          <img src={cake} className="shadow-2xl w-32 md:w-52 lg:w-full md:h-64 lg:h-72" alt="hero" />
          </div>
          <div className="space-y-7 p-5 py-7 md:px-24 lg:pl-44">
            <h1 className="text-3xl leading-none lg:text-7xl">
              Vertrek <span className="sub">&</span> aankomst
            </h1>
            <p className="text-1xl font-bold sub lg:text-xl">
              Gezellig, rustig en eerlijk
            </p>
            <p>
              Bij elk van deze wandelingen is ons vertrek- en eindpunt
              <b> Brasserie-Feestzaal ‘t-Oud-Sanatorium</b> gelegen op ons
              domein
              <b>Sanapolis</b>.
            </p>
            <p>
              In deze gezellige brasserie met kinderboerderij kan je na de
              wandeling heerlijk culinair nagenieten. En je kan er ons
              huisgebrouwen Sanapolis-streekbier proeven.
            </p>
            <button className="btn-body site-btn mt-3">ONTDEK DE BRASSERIE</button>
          </div>
        </div>
      </div>
      {/* End of dining section */}
      {/* Photoshoot Section */}
      <div className="hero py-5">
        <div className="hero-content flex-col md:flex-row md:pl-24 md:gap-14 lg:pl-36 lg:gap-20 lg:flex-row">
          <img
            src={photoshoot}
            className="max-w-52 md:w-64 shadow-2xl lg:w-72 photoshoot"
            alt="hero"
          />
          <div className="lg:mr-32">
            <h1 className="text-4xl lg:text-5xl">Fotoshoot</h1>
            <p className="py-2 text-sm lg:text-xl font-bold sub">
              Twee alpaca’s & het volledige domein
            </p>
            <p className="py-4 lg:text-base">
              Ben je op zoek naar een origineel idee voor je huwelijks of
              communiefoto’s? Boek dan hier je fotoshoot met onze alpaca’s. Wij
              zorgen voor twee alpaca’s én het natuurschoon van het domein
              Sanapolis. Jij neemt de foto’s zelf of brengt een fotograaf naar
              keuze mee. En dat alles voor een all-in prijs van 75 EUR voor een
              fotoshoot van anderhalf uur.
            </p>
            <button className="btn-body site-btn">BOEK EEN FOTOSHOOT</button>
          </div>
        </div>
      </div>
      {/* End of Photoshoot Section */}
      {/* Video Section */}
      <div className="py-5">
        <h2 className="text-4xl text-center mb-8">Filmpje</h2>
        <hr className="dvider m-auto w-40" />
        <p className="text-center m-5">
          Bekijk hieronder een filmpje van
          <br />
          een van onze Alpaca wandelingen
        </p>
      </div>
      {/* bookig */}
      <Booking></Booking>
    </>
  );
};

export default Home;
