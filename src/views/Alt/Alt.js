import React from "react";
import { Page, PageWrapper } from "./csx";
import { Text } from "../../components/UIKit";

const Alt = (props) => {
  return (
    <PageWrapper>
      <Page>
        <Text>
          Made by <a href="https://github.com/mcclowes">@mcclowes</a>
        </Text>
      </Page>
    </PageWrapper>
  );
};

export default Alt;
