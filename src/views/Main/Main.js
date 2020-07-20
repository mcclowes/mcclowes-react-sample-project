import Dumb from "../../components/Dumb";
import React from "react";
import Smart from "../../components/Smart";
import { Page, PageWrapper } from "./csx";
import { Text } from "../../components/UIKit";
import Anime from "react-anime";

const Main = (props) => {
  return (
    <PageWrapper>
      <Anime
        opacity={[0, 1]}
        translateY={["-4em", 0]}
        delay={(e, i) => i * 2000}
      >
        <Page>
          <Smart>
            <Text>Hello World!</Text>
          </Smart>

          <Dumb>
            <Text>
              This is an example project. Make changes as you see fit.
            </Text>
          </Dumb>
        </Page>
      </Anime>
    </PageWrapper>
  );
};

export default Main;
