import React from "react";
import { Layouts } from "../../components/Layouts";
import { Hero } from "../../components/Hero";
import { Card } from "../../components/card";
import "./home.css"
import { Smm } from "../../components/Smm";

export const Home = () => {
  return (
    <div>
      <Layouts>
        <Hero />
        <div className="container">
          <p className="card_text">Oxirgi e'lonlar</p>
          <div
            className="card_inner"
            style={{ display: "flex", flexWrap: "wrap", marginBottom: "200px" }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <button className="card_btn">Ko’proq ko’rish</button>
        </div>
        <Smm/>
      </Layouts>
    </div>
  );
};
