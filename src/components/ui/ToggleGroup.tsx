/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { ToggleGroup as Ark } from "@ark-ui/react";
import { cva } from "#styled/css";

const root = cva({
  base: {
    display: "flex",
    alignItems: "strecth",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray.200",
    w: "max",
    rounded: "sm",
  },
});

const item = cva({
  base: {
    minH: 10,
    py: 2,
    px: 3,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "gray.200",
    "&[data-state=on]": {
      bgColor: "gray.100",
    },
    _first: {
      borderLeftWidth: 0,
    },
  },
});

export const Root = styled(Ark.Root, root);
export const Item = styled(Ark.Item, item);

export const ToggleGroup = Object.assign(Root, {
  Root,
  Item,
});

/**
 * END
 */
