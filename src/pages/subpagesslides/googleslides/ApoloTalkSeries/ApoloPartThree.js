import React from "react";
import Logo from "../../../../components/elements/Logo";
import Bugs from "../../../../components/elements/Bugs";
import ReactGoogleSlides from "react-google-slides";

export default function ApoloPartThree() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>Apolo Part 3</h1>
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: 10,
        }}
      >
        <h1>#7</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1ox_ZhkweMP8wT0nvpj5WDgYO1iS_arOngpT_tLnAsFs/edit"
          showControls
          slideDuration={999999}
        />
        <h1>#8</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1GHqizItGOxmz0ZatrZ72Ds_IA_xTnNe7Wdm54OT0Jhg/edit"
          showControls
          slideDuration={999999}
        />
        <h1>#9</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1BkvcnrmAjV_c1iva19i6MQN_3Y5c9lu7gC8MZ8vffdw/edit"
          showControls
          slideDuration={999999}
        />
        <h1>#10</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1byZyMKuU7aBb0siEiey-m-P7QIXAP0e8XKllJ-bgHyg/edit#slide=id.p"
          showControls
          slideDuration={999999}
        />
        <h1>#11</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1vvxaOTOeji3yg7kxlOS8t2OYdo-JWiAAM1iQaF3Ups0/edit"
          showControls
          slideDuration={999999}
        />
      </div>
      <Bugs />
    </div>
  );
}
