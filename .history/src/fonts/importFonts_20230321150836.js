import { toCamelCase, isOneOf } from "@/utils/strings";

//import from @next/font
import {
  Cabin,
  Gelasio,
  Raleway,
  Inter,
  Space_Mono,
  Playfair_Display,
  Nunito,
  Rubik,
  Work_Sans,
  Quicksand,
  Karla,
  Josefin_Sans,
  Lato,
  Poppins,
  Lora,
  Bitter,
  Roboto_Serif,
  //Noto_Serif_Bengali,
  // Noto_Sans_Display,
  // Noto_Serif_Display,
  Roboto_Mono,
  Comfortaa,
  Open_Sans,
  Oleo_Script,
  Sansita_Swashed,
  Roboto_Flex,
  Montserrat,
} from "@next/font/google";

//load each font (must do this manually UNFORTUNATELY!!!!)

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});
const gelasio = Gelasio({
  subsets: ["latin"],
  variable: "--font-gelasio",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: "400",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});
// const notoSansBengali = Noto_Sans_Bengali({
//   subsets: ["latin"],
//   variable: "--font-noto-sans-bengali",
// });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
});
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});
const oleoScript = Oleo_Script({
  subsets: ["latin"],
  variable: "--font-oleo-script",
  weight: "400",
});
const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita-swashed",
});
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

//add the result to font list so we can access
//ALPHABETICAL LIST----------------------------------------------
const fonts = {
  ["var(--font-bitter)"]: {
    category: ["serif"],
    name: "Bitter",
    config: bitter,
  },
  ["var(--font-cabin)"]: {
    category: ["sans"],
    name: "Cabin",
    config: cabin,
  },
  ["var(--font-comfortaa)"]: {
    category: ["display"],
    name: "Comfortaa",
    config: comfortaa,
  },
  ["var(--font-gelasio)"]: {
    category: ["serif", "display"],
    name: "Gelasio",
    config: gelasio,
  },
  ["var(--font-inter)"]: {
    category: ["sans"],
    name: "Inter",
    config: inter,
  },
  ["var(--josefin-sans)"]: {
    category: ["sans"],
    name: "Josefin Sans",
    config: josefinSans,
  },
  ["var(--font-karla)"]: {
    category: ["sans"],
    name: "Karla",
    config: karla,
  },
  ["var(--font-lato)"]: {
    category: ["sans"],
    name: "Lato",
    config: lato,
  },
  ["var(--font-lora)"]: {
    category: ["serif"],
    name: "Lora",
    config: lora,
  },

  ["var(--font-montserrat)"]: {
    category: ["sans", "display", "special"],
    name: "Montserrat",
    config: montserrat,
  },
  ["var(--font-nunito)"]: {
    category: ["sans"],
    name: "Nunito",
    config: nunito,
  },
  ["var(--font-oleo-script)"]: {
    category: ["display", "special"],
    name: "Oleo Script",
    config: oleoScript,
  },
  ["var(--font-open-sans)"]: {
    category: ["display", "sans"],
    name: "Open Sans",
    config: openSans,
  },

  ["var(--playfair-display)"]: {
    category: ["display"],
    name: "Playfair Display",
    config: playfairDisplay,
  },

  ["var(--font-poppins)"]: {
    category: ["sans"],
    name: "Poppins",
    config: poppins,
  },
  ["var(--font-quicksand)"]: {
    category: ["sans"],
    name: "Quicksand",
    config: quicksand,
  },
  ["var(--font-raleway)"]: {
    category: ["sans"],
    name: "Raleway",
    config: raleway,
  },
  ["var(--font-roboto-flex)"]: {
    category: ["sans", "display", "special"],
    name: "Roboto Flex",
    config: robotoFlex,
  },
  ["var(--font-roboto-mono)"]: {
    category: ["mono"],
    name: "Roboto Mono",
    config: robotoMono,
  },
  ["var(--font-roboto-serif)"]: {
    category: ["serif"],
    name: "Roboto Serif",
    config: robotoSerif,
  },

  ["var(--font-rubik)"]: {
    category: ["sans"],
    name: "Rubik",
    config: rubik,
  },
  ["var(--font-sansita-swashed)"]: {
    category: ["display", "special"],
    name: "Sansita Swashed",
    config: sansitaSwashed,
  },
  ["var(--font-space-mono)"]: {
    category: ["mono"],
    name: "Space Mono",
    config: spaceMono,
  },
  ["var(--font-work-sans)"]: {
    category: ["sans"],
    name: "Work Sans",
    config: workSans,
  },
};

//just return variables for use in _app (dev only)
const allFontVariables = () => {
  let result = ` `;
  for (const font in fonts) {
    result += `${fonts[font].config.variable} `;
  }
  return result;
};

//just return variables for use in _app (dev only)
const allFontClassNames = () => {
  let result = ` `;
  for (const font in fonts) {
    result += `${fonts[font].config.className} `;
  }
  return result;
};

//need this for store
const getAllFontsByVariable = () => {
  let result = {};
  for (const font in fonts) {
    result[font] = fonts[font].name;
  }
  return result;
};

const getFontsArray = () => {
  let result = [];
  for (const font in fonts) {
    result.push({ fontVar: font, name: fonts[font].name });
  }
  return result;
};

const getFontsByCategory = () => {
  let result = {
    sans: [],
    serif: [],
    display: [],
    mono: [],
    special: [],
  };

  const fontKeys = Object.keys(fonts);

  fontKeys.forEach((fontkey) => {
    let fontObj = fonts[fontkey];

    for (const cat in fontObj.category) {
      let category = fontObj.category[cat];

      result[category].push(fontObj.name);
    }
  });

  result.sans.sort();
  result.serif.sort();
  result.display.sort();
  result.mono.sort();
  result.special.sort();
  // console.log("font list:", result);
  return result;
};

const getFontByName = (name) => {
  let varname = name.replace(" ", "");
  let key = varname[0].toLowerCase() + varname.substring(1);
  let obj = fonts[key];
  return obj;
};

const getFontClassName = (name) => {
  let obj = getFontByName(name);
  if (typeof obj === "object") {
    //console.log(name, " classname:", obj.config.className);
    return obj.config.className;
  } else {
    return "";
  }
};

const getFontVariable = (name) => {
  if (!name) return;
  let str = name.replaceAll(" ", "-").toLowerCase();
  return `var(--font-${str})`;
};

const getFontNameFromVar = (variable = "") => {
  if (variable.length === 0) return;
  let str = variable.slice(11, variable.length - 1);

  // TODO: return both name and cssvariable in one object
  if (isOneOf(str, ["body", "display", "special", "mono", "forms"])) {
    //lookup the real font here
    return str;
  } else {
    let words = str.split("-");
    //console.log(typeof words);
    if (!Array.isArray(words)) return;
    words = words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    });

    return words.join(" ");
  }
};

const fontVariables = allFontVariables();
const fontClassNames = allFontClassNames();

export {
  getFontsByCategory,
  fontVariables,
  fontClassNames,
  fonts,
  getFontByName,
  getFontClassName,
  getFontVariable,
  getFontNameFromVar,
  getFontsArray,
};
