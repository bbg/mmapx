/**
 * BEGIN
 */

import { IconDeviceFloppy } from "@tabler/icons-react";
import { memo, useCallback } from "react";
import { Button } from "#components/ui/Button";
import { useNodes, useReactFlow } from "reactflow";
import { Tooltip } from "#components/ui/Tooltip";
import { useSetAtom } from "jotai";
import { storage } from "~/atom";

const label = "Save to browser";

export const SaveStorage = memo(() => {
  const setStorageFlow = useSetAtom(storage);
  const flow = useReactFlow();
  const nodes = useNodes();

  const onSave = useCallback(() => {
    const data = flow.toObject();
    if (data) {
      const newData = {
        createdAt: Date(),
        ...data,
      };
      setStorageFlow(newData);
    }
  }, [flow, setStorageFlow]);

  return (
    <Tooltip.Root
      lazyMount
      openDelay={300}
      closeDelay={100}
    >
      <Tooltip.Trigger asChild>
        <Button
          variant="toolbar"
          size="md"
          onClick={onSave}
          disabled={nodes.length === 0}
        >
          <IconDeviceFloppy size={20} />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>{label}</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
});

/**
 * END
 */
