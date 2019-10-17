import Dumb from "../../components/Dumb";
import Nav from "../Nav";
import React from "react";
import Smart from "../../components/Smart";
import { Page, PageWrapper } from "./csx";
import { Text } from "../../components/UIKit";

const Main = props => {
  return (
    <>
      <Nav />

      <PageWrapper>
        <Page>
          <Smart>
            <Text>Hello World!</Text>
          </Smart>

          <Dumb>
            <Text>Make changes as you wish</Text>
          </Dumb>
        </Page>
      </PageWrapper>
    </>
  );
};

export default Main;
