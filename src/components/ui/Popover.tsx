/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { Popover as Ark } from "@ark-ui/react";

export const Root = styled(Ark.Root);
export const Trigger = styled(Ark.Trigger);
export const Indicator = styled(Ark.Indicator);
export const Positioner = styled(Ark.Positioner);
export const Content = styled(Ark.Content);
export const Title = styled(Ark.Title);
export const Description = styled(Ark.Description);

export const Popover = Object.assign(Root, {
  Root,
  Trigger,
  Indicator,
  Positioner,
  Content,
  Title,
  Description,
});

/**
 * END
 */
