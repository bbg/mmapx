/**
 * BEGIN
 */

import { cva } from "#styled/css";
import { styled } from "#styled/jsx";
import TextareaAutosize from "react-textarea-autosize";

const textarea = cva({
  base: {
    rounded: "sm",
    resize: "none",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray.200",
    p: 3,
    color: "gray.700",
    _focusWithin: {
      outlineColor: "gray.400",
    },
  },
  variants: {
    size: {
      full: {
        w: "full",
      },
    },
  },
});

export const Textarea = styled(TextareaAutosize, textarea);

/**
 * END
 */
