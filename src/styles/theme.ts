import { DefaultTheme } from "styled-components";

const colors = {
  primary700: "#F47500",
  primary600: "#F17D2A",
  primary500: "#FF8700",
  primary400: "#FC9C2C",
  primary300: "#FFAF55",
  primary200: "#FDBE78",
  primary100: "#FFD09C",
  primary50: "#FFE2C2",

  sub_mint: "#05CEC2",

  b50: "#F8FAFC",
  b100: "#F1F5F9",
  b200: "#E2E8F0",
  b300: "#CBD5E1",
  b400: "#94A3B8",
  b500: "#64748B",
  b600: "#475569",
  b700: "#334155",
  b800: "#1E293B",
  b900: "#0F172A",
  b950: "#020617",

  white: "#FFFFFF",
  black: "#000000",
} as const;

interface Font {
  weight: number;
  size: number;
}

const FONT = ({ weight, size }: Font): string => {
  return `
    font-family : "Pretendard";
    font-weight : ${weight};
    font-size : ${size}rem;
    `;
};

const fonts = {
  //heading
  heading1_b: FONT({
    weight: 800,
    size: 2.4,
  }),
  heading1_m: FONT({
    weight: 600,
    size: 2.4,
  }),
  heading1_r: FONT({
    weight: 400,
    size: 2.4,
  }),

  heading2_b: FONT({
    weight: 800,
    size: 2.0,
  }),
  heading2_m: FONT({
    weight: 600,
    size: 2.0,
  }),
  heading2_r: FONT({
    weight: 400,
    size: 2.0,
  }),

  // body
  body1_b: FONT({
    weight: 800,
    size: 1.8,
  }),
  body1_m: FONT({
    weight: 600,
    size: 1.8,
  }),
  body1_r: FONT({
    weight: 400,
    size: 1.8,
  }),

  body2_b: FONT({
    weight: 800,
    size: 1.6,
  }),
  body2_m: FONT({
    weight: 600,
    size: 1.6,
  }),
  body2_r: FONT({
    weight: 400,
    size: 1.6,
  }),

  body3_b: FONT({
    weight: 800,
    size: 1.4,
  }),
  body3_m: FONT({
    weight: 600,
    size: 1.4,
  }),
  body3_r: FONT({
    weight: 400,
    size: 1.4,
  }),

  // caption
  cpation1_b: FONT({
    weight: 800,
    size: 1.2,
  }),
  cpation1_m: FONT({
    weight: 600,
    size: 1.2,
  }),
  cpation1_r: FONT({
    weight: 400,
    size: 1.2,
  }),

  cpation2_b: FONT({
    weight: 800,
    size: 1.1,
  }),
  cpation2_m: FONT({
    weight: 600,
    size: 1.1,
  }),
  cpation2_r: FONT({
    weight: 400,
    size: 1.1,
  }),

  cpation3_b: FONT({
    weight: 800,
    size: 1.0,
  }),
  cpation3_m: FONT({
    weight: 600,
    size: 1.0,
  }),
  cpation3_r: FONT({
    weight: 400,
    size: 1.0,
  }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
