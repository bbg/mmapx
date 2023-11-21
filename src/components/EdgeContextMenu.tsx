/**
 * BEGIN
 */

import { edgeBoundingClientRect } from "~/atom";
import { useAtomValue } from "jotai";
import { memo } from "react";
import { Stack } from "#styled/jsx";
import { Button, ButtonVariants } from "#components/ui/Button";

export type ContextMenuProps = {
  id: string;
  top: number;
  left: number;
  right?: number;
  bottom?: number;
};

const BUTTON_PROPS: ButtonVariants = {
  variant: "menu",
  size: "sm",
};

export const EdgeContextMenu = memo(() => {
  const getRect = useAtomValue(edgeBoundingClientRect);

  return (
    <Stack
      {...getRect}
      position="absolute"
      bgColor="white"
      zIndex={10}
      p={1}
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.200"
      rounded="sm"
      shadow="lg"
      w={36}
      h="max"
      gap={0}
      style={{
        top: getRect?.top,
        left: getRect?.left,
        right: getRect?.right,
        bottom: getRect?.bottom,
      }}
    >
      <Button {...BUTTON_PROPS}>Change Color</Button>
      <Button {...BUTTON_PROPS}>Type</Button>
      <Button {...BUTTON_PROPS}>Line Start</Button>
      <Button {...BUTTON_PROPS}>Line End</Button>
    </Stack>
  );
});

/**
 * END
 */
