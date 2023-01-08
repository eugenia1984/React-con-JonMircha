import React from "react";
import Card from "./card/Card";
import SubTitle from "./general/SubTitle";

export default function Bulma() {
  return (
    <div className="container">
      <SubTitle headline="Bulma" />
      <Card />
    </div>
  );
}
