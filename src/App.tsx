import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Rooms } from "./components/Rooms";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Rooms />
    </div>
  );
}

export default App;
