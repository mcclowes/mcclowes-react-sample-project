import styled from "styled-components/macro";

export const PageWrapper = styled("div")`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    52deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.alt} 100%
  );
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
`;

export const PageContainer = styled("div")`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.border.radius};
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  text-align: center;

  -webkit-box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);
`;
