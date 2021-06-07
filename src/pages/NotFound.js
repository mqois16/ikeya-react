import React from "react";
import Header from "parts/Header";

import Footer from "parts/Footer";
import SiteMap from "parts/SiteMap";
import PageErrorMessage from "parts/PageErrorMessage";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMessage />

      <SiteMap />
      <Footer />
    </>
  );
}
