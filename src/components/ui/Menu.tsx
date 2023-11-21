/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { Menu as Ark } from "@ark-ui/react";

export const Root = styled(Ark.Root);
export const Trigger = styled(Ark.Trigger);
export const Positioner = styled(Ark.Positioner);
export const Content = styled(Ark.Content);
export const Item = styled(Ark.Item);
export const ContextTrigger = Ark.ContextTrigger;

export const Menu = Object.assign(Root, {
  Root,
  Trigger,
  Positioner,
  Content,
  Item,
  ContextTrigger,
});

/**
 * END
 */
