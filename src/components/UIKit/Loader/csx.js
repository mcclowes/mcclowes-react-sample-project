import styled from "styled-components/macro";

const LoaderWrapper = styled.div`
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.lightgray};
  border-top: 2px solid ${(props) => props.theme.colors.primary};
  height: ${(props) => (props.height ? props.height : "16px")};
  width: ${(props) => (props.width ? props.width : "16px")};

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { LoaderWrapper };

LoaderWrapper.defaultProps = {
  theme: {
    colors: {
      primary: "#DD3437",
      lightgray: "#eeeeee",
    },
  },
};
