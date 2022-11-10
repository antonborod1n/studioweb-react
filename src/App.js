import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./components/Header/Header";
import Top from "./components/Top/Top";
import Cooperation from "./components/Cooperation/Cooperation";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import './index.scss';

const App = () => (
  <ReactFullpage
    navigation
    navigat
    loopBottom={true}
    navigationPosition={"left"}
    responsiveWidth={1600}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <section className="section active first-screen page-section fp-auto-height">
            <Header />
            <Top />
          </section>
          <Cooperation />
          <Portfolio />
          <Price />
          <section className="section bottom page-section fp-auto-height">
            <Banner />
            <Footer />
          </section>
        </div>
      );
    }}
  />
);
export default App;