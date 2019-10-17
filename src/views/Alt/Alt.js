import Nav from "../Nav";
import React from "react";
import { Page, PageWrapper } from "./csx";
import { Text } from "../../components/UIKit";

const Alt = props => {
  return (
    <>
      <Nav />

      <PageWrapper>
        <Page>
          <Text>Made by @mcclowes</Text>
        </Page>
      </PageWrapper>
    </>
  );
};

export default Alt;
