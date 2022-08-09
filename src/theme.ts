import { MantineThemeBase, MantineThemeOverride } from "@mantine/core";

const $blue800 = "#0e206f";
const $blue600 = "#2d5fe8";
const $blue500 = "#4378ff";
const $blue200 = "#d5e1ff";
const $blue100 = "#f0f4ff";

export const PubTheme = (
  defaultTheme: MantineThemeBase
): MantineThemeOverride => {
  const {
    colors: { blue },
  } = defaultTheme;
  return {
    fontFamily: "Oswald",
    spacing: {
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
    },
    radius: {
      xs: 12,
      sm: 16,
      md: 26,
      lg: 32,
    },
    lineHeight: "22px",
    colors: {
      blue: [
        blue[0],
        $blue100,
        $blue200,
        blue[3],
        blue[4],
        $blue500,
        $blue600,
        blue[7],
        $blue800,
        blue[9],
      ],
    },
    headings: {
      fontFamily: "Mulish",
      fontWeight: "bold",
      sizes: {
        h1: {
          fontSize: "48px",
          lineHeight: "54px",
        },
        h2: {
          fontSize: "32px",
          lineHeight: "40px",
        },
        h3: {
          fontSize: "24px",
          lineHeight: "36px",
        },
        h4: {
          fontSize: "22px",
          lineHeight: "28px",
        },
        h5: {
          fontSize: "20px",
          lineHeight: "24px",
        },
        h6: {
          fontSize: "18px",
          lineHeight: "28px",
        },
      },
    },
  };
};
