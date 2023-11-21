/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { Editable as Ark } from "@ark-ui/react";
import { cva } from "#styled/css";

const input = cva({
  base: {
    rounded: "sm",
    resize: "none",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray.200",
    py: 1,
    px: 2,
    minH: 8,
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

export const Root = Ark.Root;
export const Label = styled(Ark.Label);
export const Area = Ark.Area;
export const Input = styled(Ark.Input, input);
export const Preview = styled(Ark.Preview);
export const SubmitTrigger = styled(Ark.SubmitTrigger);
export const CancelTrigger = styled(Ark.CancelTrigger);
export const Control = styled(Ark.Control);
export const EditTrigger = styled(Ark.EditTrigger);

export const Editable = Object.assign(Root, {
  Root,
  Label,
  Area,
  Input,
  Preview,
  SubmitTrigger,
  CancelTrigger,
  Control,
  EditTrigger,
});

/**
 * END
 */
