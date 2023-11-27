import React from "react";
import Header from "../../components/Header/Header";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <main>
        <ImageOverlay />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
