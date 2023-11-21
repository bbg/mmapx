/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { Tooltip as Ark } from "@ark-ui/react";
import { cva } from "#styled/css";

const tooltip = cva({
  base: {
    rounded: "sm",
    p: 2,
    fontSize: "xs",
    lineHeight: 1,
    color: "gray.100",
    bgColor: "gray.800",
    shadow: "lg",
    userSelect: "none",
  },
});

const Root = Ark.Root;
const Trigger = Ark.Trigger;
const Positioner = Ark.Positioner;
const Content = styled(Ark.Content, tooltip);
const Arrow = Ark.Arrow;

export const Tooltip = Object.assign(Root, {
  Root,
  Trigger,
  Positioner,
  Content,
  Arrow,
});

/**
 * END
 */
