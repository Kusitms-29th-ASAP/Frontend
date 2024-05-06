import { DefaultTheme } from "styled-components";

const colors = {
  primary800: "#E36E03",
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
    font-size : ${size}px;
    `;
};

const fonts = {
  //heading
  heading1_b: FONT({
    weight: 700,
    size: 24,
  }),
  heading1_m: FONT({
    weight: 600,
    size: 24,
  }),
  heading1_r: FONT({
    weight: 400,
    size: 24,
  }),

  heading2_b: FONT({
    weight: 700,
    size: 20,
  }),
  heading2_m: FONT({
    weight: 600,
    size: 20,
  }),
  heading2_r: FONT({
    weight: 400,
    size: 20,
  }),

  // body
  body1_b: FONT({
    weight: 700,
    size: 18,
  }),
  body1_m: FONT({
    weight: 600,
    size: 18,
  }),
  body1_r: FONT({
    weight: 400,
    size: 18,
  }),

  body2_b: FONT({
    weight: 700,
    size: 16,
  }),
  body2_m: FONT({
    weight: 600,
    size: 16,
  }),
  body2_r: FONT({
    weight: 400,
    size: 16,
  }),

  body3_b: FONT({
    weight: 700,
    size: 14,
  }),
  body3_m: FONT({
    weight: 500,
    size: 14,
  }),
  body3_r: FONT({
    weight: 400,
    size: 14,
  }),

  // caption
  caption1_b: FONT({
    weight: 700,
    size: 12,
  }),
  caption1_m: FONT({
    weight: 500,
    size: 12,
  }),
  caption1_r: FONT({
    weight: 400,
    size: 12,
  }),

  caption2_b: FONT({
    weight: 700,
    size: 11,
  }),
  caption2_m: FONT({
    weight: 500,
    size: 11,
  }),
  caption2_r: FONT({
    weight: 400,
    size: 11,
  }),

  caption3_b: FONT({
    weight: 700,
    size: 10,
  }),
  caption3_m: FONT({
    weight: 600,
    size: 10,
  }),
  caption3_r: FONT({
    weight: 400,
    size: 10,
  }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};