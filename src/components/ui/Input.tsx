/**
 * BEGIN
 */

import { cva } from "#styled/css";
import { styled } from "#styled/jsx";

const input = cva({
  base: {
    rounded: "sm",
    resize: "none",
  },
  variants: {
    variant: {
      primary: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "gray.200",
        py: 2,
        px: 3,
        minH: 10,
        color: "gray.700",
        _focusWithin: {
          outlineColor: "gray.400",
        },
      },
      edge: {
        p: 2,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "blue.600",
        _focusWithin: {
          outlineColor: "blue.600",
        },
      },
    },
    size: {
      full: {
        w: "full",
      },
      sm: {
        py: 1,
        px: 2,
        minH: 8,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Input = styled("input", input);

/**
 * END
 */
