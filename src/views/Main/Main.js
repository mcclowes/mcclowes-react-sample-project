import Dumb from "../../components/Dumb";
import React from "react";
import Page from "../../components/Page";
import Smart from "../../components/Smart";
import { Text } from "../../components/Primitives";

const Main = (props) => {
  return (
    <Page>
      <Smart>
        <Text>Hello World!</Text>
      </Smart>

      <Dumb>
        <Text>This is an example project. Make changes as you see fit.</Text>
      </Dumb>
    </Page>
  );
};

export default Main;
