import Anime from "react-anime";
import React from "react";
import { PageContainer, PageWrapper } from "./csx";

const Page = (props) => {
  return (
    <PageWrapper>
      <Anime
        opacity={[0, 1]}
        translateY={["-4em", 0]}
        delay={(e, i) => i * 2000}
      >
        <PageContainer>{props.children}</PageContainer>
      </Anime>
    </PageWrapper>
  );
};

export default Page;
