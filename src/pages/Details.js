import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
// import BrowseRoom from "parts/HomePages/BrowseRoom";
// import JustArrived from "parts/HomePages/JustArrived";
import SiteMap from "parts/SiteMap";
import Clients from "parts/Clients";
import Footer from "parts/Footer";

function Details() {
  return (
    <>
      <Header></Header>
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}

export default Details;
