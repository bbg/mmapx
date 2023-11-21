/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { Checkbox as Ark } from "@ark-ui/react";
import { cva } from "#styled/css";

const root = cva({
  base: {
    display: "flex",
    alignItems: "center",
    columnGap: 2,
  },
});

export const Root = styled(Ark.Root, root);
export const Label = styled(Ark.Label);
export const Control = styled(Ark.Control);
export const Indicator = styled(Ark.Indicator);

export const Checkbox = Object.assign(Root, {
  Root,
  Label,
  Control,
  Indicator,
});

/**
 * END
 */
