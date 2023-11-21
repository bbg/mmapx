/**
 * BEGIN
 */

import { cva } from "#styled/css";
import { styled } from "#styled/jsx";
import * as Formik from "formik";

const message = cva({
  base: {},
  variants: {
    status: {
      error: {
        fontSize: "sm",
        color: "red.500",
      },
    },
  },
});

export const Message = styled("span", message);
export const ErrorMessage = styled(Formik.ErrorMessage, message);

/**
 * END
 */
