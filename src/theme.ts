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
    fontFamily: "Mulish",
    spacing: {
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
    },
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
  };
};
