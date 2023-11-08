import { extendTheme, theme as base } from "@chakra-ui/react";

const inputStyles = {
  variants: {
    filled: {
      field: {
        borderColor: "gray.200",
        borderWidth: 1,
        _focus: {
          borderColor: "primary.400",
          backgroundColor: "#fff",
        },
        _hover: {
          backgroundColor: "gray.50",
        },
      },
    },
  },
};

const theme = extendTheme({
  colors: {
    primary: {
      50: "#EDE5F4",
      100: "#e6d4f7",
      200: "#B371EA",
      300: "#803EB7",
      400: "#4D0B84",
      500: "#34006B",
      600: "#1A0051",
      700: "#24053D",
      800: "#160325",
    },
  },
  fonts: {
    heading: `'DM Sans Variable',${base.fonts?.heading}`,
    body: `'DM Sans Variable',${base.fonts?.body}`,
  },
  components: {
    Input: { ...inputStyles },
    Select: { ...inputStyles },
  },
});

export default theme;
