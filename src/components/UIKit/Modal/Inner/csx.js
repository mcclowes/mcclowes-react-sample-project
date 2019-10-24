import styled from "styled-components/macro";

export const InnerWrapper = styled.div`
  background-color: white;
  margin: 0 !important;
  max-height: 100%;
  max-height: 90vh;
  max-width: 100%;
  min-width: 100%; // ????
  //min-width: 680px;
  width: 680px;
  overflow: auto;

  ${props =>
    props["data-modal-size"] === "mini" &&
    `
    min-width: 318px;
    max-width: 318px;
  `};

  ${props =>
    props["data-modal-size"] === "tiny" &&
    `
    max-width: 500px;
    min-width: 500px;
  `};

  ${props =>
    props["data-modal-size"] === "small" &&
    `
    max-width: 680px;
  `};

  ${props =>
    props["data-modal-size"] === "medium" &&
    `
    max-width: 920px;
  `};
`;
