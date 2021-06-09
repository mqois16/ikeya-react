import React from "react";
import Header from "parts/Header";
import Hero from "parts/HomePages/Hero";
import BrowseRoom from "parts/HomePages/BrowseRoom";
import JustArrived from "parts/HomePages/JustArrived";
import SiteMap from "parts/SiteMap";
import Clients from "parts/Clients";
import Footer from "parts/Footer";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDom from "helpers/hooks/useModalDom";
function HomePage() {
  //hooks
  useScrollAnchor();
  useModalDom();
  return (
    <>
      <Header theme="white" position="absolute"></Header>
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
