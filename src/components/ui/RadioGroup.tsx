/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { RadioGroup as Ark } from "@ark-ui/react";

export const Root = styled(Ark.Root);
export const Label = styled(Ark.Label);
export const Item = styled(Ark.Item);
export const ItemText = styled(Ark.ItemText);
export const ItemControl = styled(Ark.ItemControl);
export const Indicator = styled(Ark.Indicator);

export const RadioGroup = Object.assign(Root, {
  Root,
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
});

/**
 * END
 */
