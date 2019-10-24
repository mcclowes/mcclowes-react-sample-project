/******************************************/
/************** breakpoints ***************/
/******************************************/

const breakpoints = {
  xSmall: {
    min: "0px",
    max: "414px"
  },
  small: {
    min: "415px",
    max: "768px"
  },
  medium: {
    min: "769px",
    max: "999px"
  },
  large: {
    min: "1000px",
    max: "1199px"
  },
  xLarge: {
    min: "1200px",
    max: "9999px"
  }
};

export const breakpoint = (size, cap, styles) => {
  let rules = {
    max: `(max-width: ${breakpoints[size].max})`,
    min: `(min-width: ${breakpoints[size].min})`,
    only: ""
  };

  rules.only = `${rules.max} and ${rules.min}`;

  return `
    @media ${rules[cap]} {
      ${styles};
    }
  `;
};
