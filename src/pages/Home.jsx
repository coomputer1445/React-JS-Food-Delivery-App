// import React from "react";
import Header from "../components/header/Header";
import ShowRm from "../components/showroom/ShowRm";
import SliderPromos from "../components/sliderpromos/SliderPromos";

function Home() {
  return (
    <>
      <div
        style={{ backgroundColor: "#d1411e", color: "white" }}
        className="vh-100 vw-100"
      >
        <Header />
        <SliderPromos />
      </div>
      <ShowRm />
    </>
  );
}

export default Home;
