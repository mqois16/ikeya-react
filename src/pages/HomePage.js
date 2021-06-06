import React from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import BrowseRoom from "parts/HomePages/BrowseRoom";
import JustArrived from "parts/HomePages/JustArrived";
import SiteMap from "parts/SiteMap";
import Clients from "parts/Clients";
import Footer from "parts/Footer";

function HomePage() {
  return (
    <>
      <Header></Header>
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}

export default HomePage;
