import React from "react";
import "./css/home.css";

import Header from "./Header";
import Popup from "./Popup";

import About from "./main/About";
import Book from "./main/Book";
import Features from "./main/Features";
import Stories from "./main/Stories";
import Tours from "./main/Tours";

const Home = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <About></About>
        <Features></Features>
        <Tours></Tours>
        <Stories></Stories>
        <Book></Book>
      </main>
      <Popup></Popup>
    </React.Fragment>
  );
};

export default Home;
