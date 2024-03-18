import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Rooms } from "./components/Rooms";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Rooms />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
