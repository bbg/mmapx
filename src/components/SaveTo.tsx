/**
 * BEGIN
 */

import { IconDownload } from "@tabler/icons-react";
import { memo, useCallback } from "react";
import { Button } from "#components/ui/Button";
import { useKeyPress, useNodes, useReactFlow } from "reactflow";
import { Tooltip } from "#components/ui/Tooltip";

const label = "Save to file";

export const SaveTo = memo(() => {
  const flow = useReactFlow();
  const nodes = useNodes();
  const cmdAndSPressed = useKeyPress(["Meta+s", "Strg+s"], { target: window });

  const onSaveFile = useCallback(async () => {
    const data = flow.toObject();
    const opts: SaveFilePickerOptions = {
      suggestedName: "untitled.mmapx",
      types: [
        {
          description: "MMAPX file",
          accept: {
            "application/json": [".mmapx"],
          },
        },
      ],
    };
    if (data) {
      const handle = await window.showSaveFilePicker(opts);
      const fileData = JSON.stringify({ createdAt: Date(), ...data });
      const blob = new Blob([fileData]);
      const writableStream = await handle.createWritable();
      await writableStream.write(blob);
      await writableStream.close();
    }
  }, [flow]);

  if (cmdAndSPressed) {
    onSaveFile();
  }

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
          onClick={onSaveFile}
          disabled={nodes.length === 0}
        >
          <IconDownload size={20} />
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
