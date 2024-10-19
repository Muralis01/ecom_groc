import React from "react";
import Navbar from "./Navbar";
import AllProducts from "./AllProducts";
import Footer from "./Footer";
import ImageSlider from "./Slider";


function Home() {
  return (
    <div>
      <Navbar />
      {/* <ImageSlider/> */}
      <AllProducts/> 
      <Footer />

    </div>
  );
}

export default Home;
