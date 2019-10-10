import Dumb from "../../components/Dumb";
import React from "react";
import Smart from "../../components/Smart";
import { Page } from "./csx";

const Main = props => {
  return (
    <Page>
      <Smart>Hello World!</Smart>

      <Dumb>Make changes as you wish</Dumb>
    </Page>
  );
};

export default Main;
