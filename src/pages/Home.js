import React from "react";
import List from "../components/Lists";
import Header from "../components/Header2";
import Layout from "../components/Layout";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import "../style.css";

const Home = () => {
  return (
    <div>
      <Layout />
      <Header />
      <List />
    </div>
  );
};

export default Home;
