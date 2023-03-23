//to use, import this file and set this as currentTheme in /src/themes/index
const headingCount = 1;

const fonts = {
  body: "Times",
  display: "Times",
  special: "Times",
  mono: "Times",
  forms: "Arial",
};

const devices = ["mobile", "tablet", "laptop", "desktop", "tv"];

const deviceSettings = {
  mobile: {
    min: 320,
    max: 479,
    baseFontSize: "18px",
  },

  tablet: {
    min: 480,
    max: 767,
    baseFontSize: "20px",
  },

  laptop: {
    min: 768,
    max: 1023,
    baseFontSize: "21px",
  },

  desktop: {
    min: 1024,
    max: 1999,
    baseFontSize: "22px",
  },

  tv: {
    min: 1200,
    max: 9999,
    baseFontSize: "23px",
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
    backgroundColor: "var(--clr-primary)",
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
    backgroundColor: "var(--clr-primary50)",
    color: "var(--clr-blackish)",
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
    fontSize: ["16px", "18px", "19px", "20px", "21px"],
    lineHeight: ["1.5", "1.5", "1.5", "1.5", "1.5"],
    letterSpacing: "0px",
    wordSpacing: "0px",
    maxWidth: "60ch",
    marginBottom: "1rem",
  },

  h1: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: ["16px", "18px", "19px", "20px", "21px"],
    lineHeight: ["1.5", "1.5", "1.5", "1.5", "1.5"],
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
    lineHeight: "1.5",
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
    lineHeight: "1.5",
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
    lineHeight: "1.5",
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
  deviceSettings,
  devices,
  containers,
  text,
};

module.exports = {
  headingCount,
  colors,
  colorVariants,
  fonts,
  deviceSettings,
  devices,
  containers,
  text,
  theme,
};
