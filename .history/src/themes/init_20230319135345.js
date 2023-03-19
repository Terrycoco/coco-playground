//to use, import this file and set this as currentTheme in /src/themes/index
const headingCount = 2;

const fonts = {
  body: "Gelasio",
  display: "Gelasio",
  special: "Oleo Script",
  mono: "Space Mono",
  forms: "Poppins",
};

const fontSizes = {
  mobile: {
    body: {
      fontSize: "18",
      lineHeight: "1.5",
    },

    h2: {
      fontSize: "25",
      lineHeight: "1.16",
    },

    h1: {
      fontSize: "40",
      lineHeight: "1.16",
    },
  },

  tablet: {
    body: {
      fontSize: "19",
      lineHeight: "1.5",
    },

    h2: {
      fontSize: "25",
      lineHeight: "1.16",
    },

    h1: {
      fontSize: "40",
      lineHeight: "1.16",
    },
  },

  laptop: {
    body: {
      fontSize: "20",
      lineHeight: "1.329",
    },

    h2: {
      fontSize: "40",
      lineHeight: "1.16",
    },

    h1: {
      fontSize: "52",
      lineHeight: "1.16",
    },
  },

  desktop: {
    body: {
      fontSize: "24",
      lineHeight: "1.345",
    },

    h2: {
      fontSize: "34",
      lineHeight: "1.16",
    },

    h1: {
      fontSize: "57",
      lineHeight: "1.16",
    },
  },

  tv: {
    body: {
      fontSize: "28",
      lineHeight: "1.391",
    },

    h2: {
      fontSize: "37",
      lineHeight: "1.16",
    },

    h1: {
      fontSize: "67",
      lineHeight: "1.031",
    },
  },
};

const screens = {
  mobile: {
    min: 320,
    max: 479,
  },

  tablet: {
    min: 480,
    max: 767,
  },

  laptop: {
    min: 768,
    max: 1023,
  },

  desktop: {
    min: 1024,
    max: 1999,
  },

  tv: {
    min: 1200,
    max: 9999,
  },
};

const colors = {
  primary: "#fc3a79",
  secondary: "#fe572e",
  blackish: "#261f22",
  whitish: "#f5f5f4",
  error: "#dc2626",
};

const colorVariants = {
  primary75: "#fd6b99",

  primary50: "#fe9dbb",

  primary25: "#fecedd",

  primary10: "#ffebf1",

  primary5: "#fff5f8",

  secondary75: "#fe8162",

  secondary50: "#feab96",

  secondary25: "#ffd5cb",

  secondary10: "#ffeeea",

  secondary5: "#fff7f5",

  blackish75: "#635158",

  blackish50: "#9c868f",

  blackish25: "#cdc2c7",

  blackish10: "#ebe7e9",

  blackish5: "#f5f3f4",
};

const containers = {
  header: {
    backgroundColor: "var(--clr-primary50)",
    height: "2rem",
    paddingRight: "0rem",
    paddingLeft: "0rem",
  },
  main: {
    paddingTop: "2rem",
    paddingRight: "0rem",
    paddingBottom: "0rem",
    paddingLeft: "0rem",
  },
  section: {
    paddingTop: "0rem",
    paddingRight: "0rem",
    paddingBottom: "0rem",
    paddingLeft: "0rem",
  },
  article: {
    paddingTop: "0rem",
    paddingRight: "0rem",
    paddingBottom: "0rem",
    paddingLeft: "0rem",
  },
  aside: {
    paddingTop: "0rem",
    paddingRight: "0rem",
    paddingBottom: "0rem",
    paddingLeft: "0rem",
  },
  footer: {
    backgroundColor: "var(--clr-primary)",
    height: "0rem",
    paddingTop: "0rem",
    paddingRight: "0rem",
    paddingBottom: "0rem",
    paddingLeft: "0rem",
  },
};

const text = {
  p: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontSize: "var(--fs-body)",
    lineHeight: "var(--lh-body)",
    letterSpacing: "0px",
    wordSpacing: "0px",
    maxWidth: "60ch",
    marginBottom: "1rem",
  },

  h1: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "var(--fs-h1)",
    lineHeight: "var(--lh-h1)",
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
    maxWidth: "60ch",
    marginBottom: "1rem",
  },

  h2: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "var(--fs-h2)",
    lineHeight: "var(--lh-h2)",
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
    maxWidth: "60ch",
    marginBottom: "1rem",
  },

  h3: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "1rem",

    lineHeight: "150%",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
    maxWidth: "60ch",
    marginBottom: "1rem",
  },

  h4: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "1rem",

    lineHeight: "150%",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
    maxWidth: "60ch",
    marginBottom: "1rem",
  },

  h5: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "1rem",

    lineHeight: "150%",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
    maxWidth: "60ch",
    marginBottom: "1rem",
  },

  h6: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "1rem",

    lineHeight: "150%",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
    marginBottom: "1rem",
  },

  small: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-forms)",
    fontWeight: "400",
    fontSize: "var(--fs-sm)",
    lineHeight: "1",
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
    maxWidth: "60ch",
    marginBottom: "0rem",
  },
};

const theme = {
  headingCount,
  colors,
  colorVariants,
  fonts,
  fontSizes,
  screens,
  containers,
  text,
};

module.exports = {
  headingCount,
  colors,
  colorVariants,
  fonts,
  fontSizes,
  screens,
  containers,
  text,
  theme,
};
