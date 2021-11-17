/**
 * colors defined here
 */

const colors = {
  primary: {
    100: "#f2f3f6",
    200: "#6469A8",
    300: "#1c228f",
  },
  black: {
    300: "#222833",
    200: "#000000",
    100: "#0F0F19",
  },
  tertiary: {},
  secondary: {
    100: "rgba(100, 105, 168, 0.5)",
  },
  white: "#ffffff",
};

/**
 * @param maxWidth max width of media query
 */

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;
/**
 * List of available media queries
 * To use media query from a styled components, use
 * ```js
 * ${({theme}) => theme.media.desktop}
 * ```
 */

interface Media {
  custom: (maxNumber: number) => string;
  sm: (maxNumber: number) => string;
  md: string;
  lg: string;
  xl: string;
}

const media: Media = {
  custom: customMediaQuery,
  /**
   * small displays like phones
   */
  sm: customMediaQuery,
  /**
   * medium displays like tablets
   */
  md: customMediaQuery(768),
  /**
   * fairly large displays like small laptops
   */
  lg: customMediaQuery(992),
  /**
   * laptops and others
   */
  xl: customMediaQuery(1024),
};

/**
 *
 * @param val  size as number(unitless)
 */

const customFontSize = (val: number) => `${val}rem`;
const customRadius = (val: number) => `${val}px`;
const customSpacing = (val: number) => `${val}px`;
const customBorder = (pixel: string, color: string) =>
  `${pixel} solid ${color}`;
const circleBorder = () => `50%`;
const doubleSpacing = (verVal: number, horVal: number) =>
  `${verVal}px ${horVal}px`;

const fontSize = {
  custom: customFontSize,
  small: customFontSize(0.6),
  /**
   * normal font size
   */
  normal: customFontSize(1),
  /**
   * font size for headers
   */
  heading: customFontSize(1.5),

  hero: customFontSize(2.5),

  navlink: customFontSize(0.4),
};

/**
 * font family
 */
const fontFamily = {
  euclidBold: "EuclidBold, sans-serif",
  euclidBoldItalic: "EuclidBoldItalic, sans-serif",
  euclidItalic: "EuclidItalic, sans-serif",
  euclidLight: "EuclidLight, sans-serif",
  euclidLightItalic: "EuclidLightItalic, sans-serif",
  euclidMedium: "EuclidMedium, sans-serif",
  euclidMediumItalic: "EuclidMediumItalic, sans-serif",
  euclidRegular: "EuclidRegular,sans-serif",
  euclidSemiBold: "EuclidSemiBold, sans-serif",
  euclidSemiBoldItalic: "EuclidSemiBoldItalic, sans-serif ",
  almarena: "Almarena, sans-serif",
  almarenaBold: "AlmarenaBold, sans-serif",
  almarenaDisplayBold: "AlmarenaDisplayBold, sans-serif",
  almarenaDisplayLight: "AlmarenaDisplayLight, sans-serif",
  almarenaDisplayRegular: "AlmarenaDisplayRegular, sans-serif",
  almarenaLight: "AlmarenaLight, sans-serif",
};
const spacing = {
  normal: customSpacing(5),
  medium: customSpacing(10),
  large: customSpacing(25),
  double: doubleSpacing,
  custom: customSpacing,
};

const borderRadius = {
  default: " 8px",
  primary: "10px",
  custom: customRadius,
  round: circleBorder,
};

const border = {
  custom: customBorder,
  input: "1px solid #2d2d2d",
  subMenu: "1px solid #000000",
  card: "2px solid #000000",
};

export { colors, media, fontSize, fontFamily, borderRadius, spacing, border };
