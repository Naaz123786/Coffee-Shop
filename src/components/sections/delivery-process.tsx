import React from "react";
import Wrapper from "../wrapper";
import H2 from "../h2";
import DeliveryStepsGrid from "../delivery-steps-grid";

export default function DeliveryProcess() {
  return (
    <section className="py-20 bg-white">
      <Wrapper>
        <H2>How to use delivery service</H2>
        <DeliveryStepsGrid />
      </Wrapper>
    </section>
  );
}
