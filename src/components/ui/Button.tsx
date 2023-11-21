/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { RecipeVariantProps, cva } from "#styled/css";

const button = cva({
  base: {
    border: "1px solid transparent",
    rounded: "sm",
    px: 3,
    transition: "all 0.3s",
    _hover: {
      cursor: "pointer",
    },
    _active: {
      transform: "scale(0.95)",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: 0.7,
    },
  },
  variants: {
    variant: {
      toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "gray.600",
        bgColor: "gray.100",
        px: 0,
        _hover: {
          bgColor: "gray.800",
          color: "gray.100",
        },
        _disabled: {
          color: "gray.500",
        },
      },
      primary: {
        bgColor: "gray.800",
        color: "gray.100",
        columnGap: 1,
        _hover: {
          bgColor: "gray.700",
        },
        _disabled: {
          bgColor: "gray.700",
        },
      },
      danger: {
        bgColor: "red.600",
        color: "red.100",
        columnGap: 1,
        _hover: {
          bgColor: "red.500",
        },
        _disabled: {
          bgColor: "red.600",
        },
      },
      confirm: {
        bgColor: "green.600",
        color: "green.100",
        columnGap: 1,
        _hover: {
          bgColor: "green.500",
        },
        _disabled: {
          bgColor: "green.600",
        },
      },
      outline: {
        borderColor: "gray.200",
        color: "gray.500",
        _hover: {
          color: "gray.600",
          borderColor: "gray.300",
        },
      },
      ghost: {
        color: "gray.800",
        _hover: {
          color: "gray.100",
          bgColor: "gray.800",
        },
      },
      menu: {
        textAlign: "left",
        rounded: "xs",
        _hover: {
          bgColor: "gray.200",
        },
      },
      icon: {},
      unstyled: {
        p: 0,
        h: "auto",
        w: "auto",
        minW: "auto",
        px: 0
      }
    },
    size: {
      none: {
        minW: "auto",
        h: "auto",
        px: 0
      },
      xs: {
        minW: 7,
        h: 7,
        fontSize: "xs",
      },
      sm: {
        minW: 8,
        h: 8,
        fontSize: "sm",
      },
      md: {
        minW: 9,
        h: 9,
        fontSize: "sm",
      },
      xl: {
        minW: 10,
        h: 10,
        fontSize: "md",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
export const Button = styled("button", button);

/**
 * END
 */
