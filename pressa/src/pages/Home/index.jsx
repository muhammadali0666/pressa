import React from "react";
import { Layouts } from "../../components/Layouts";
import { Hero } from "../../components/Hero";
import { Card } from "../../components/card";
import "./home.css"
import { Smm } from "../../components/Smm";

export const Home = () => {

  // let getToken = localStorage.getItem("token");

  // window.addEventListener("click", function (e) {
  //   e.preventDefault();

  //   if (!getToken) {
  //     window.location.href = "/login";
  //   }
  // });

  return (
    <div>
      <Layouts>
        <Hero />
        <div className="container">
          <p className="card_text">Oxirgi e'lonlar</p>
          <div
            className="card_inner"
            style={{ marginBottom: "200px" }}
          >
            <Card />
          </div>
        </div>
        <Smm/>
      </Layouts>
    </div>
  );
};
