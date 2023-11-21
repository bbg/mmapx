/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { Dialog as Ark } from "@ark-ui/react";
import { cva } from "#styled/css";

const content = cva({
  base: {
    bgColor: "white",
    position: "fixed",
    inset: 0,
    m: "auto",
    h: "max-content",
    zIndex: 999,
    p: 7,
    boxShadow: "xl",
    rounded: "md",
  },
  variants: {
    size: {
      sm: {
        w: 96,
      },
      md: {
        w: 550,
      },
      lg: {
        w: 750,
      },
      xl: {
        w: 1024,
      },
    },
  },
  defaultVariants: {
    size: "xl"
  }
});

const backdrop = cva({
  base: {
    position: "fixed",
    inset: 0,
    zIndex: 5,
    backdropFilter: "blur(3px)",
    backgroundColor: "hsl(204 10% 10% / 0.6)",
  },
});

const heading = cva({
  base: {
    fontWeight: "bold",
    fontSize: "xl",
  },
});

const description = cva({
  base: {
    fontSize: "sm",
    color: "gray.700",
  },
});

export const Root = styled(Ark.Root);
export const Trigger = Ark.Trigger;
export const Positioner = Ark.Positioner;
export const Content = styled(Ark.Content, content);
export const Title = styled(Ark.Title, heading);
export const Description = styled(Ark.Description, description);
export const CloseTrigger = styled(Ark.CloseTrigger);
export const Backdrop = styled(Ark.Backdrop, backdrop);

export const Dialog = Object.assign(Root, {
  Root,
  Trigger,
  Positioner,
  Content,
  Title,
  Description,
  CloseTrigger,
  Backdrop,
});

/**
 * END
 */
