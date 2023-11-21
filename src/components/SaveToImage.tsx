/**
 * BEGIN
 */

import { Button } from "#components/ui/Button";
import { Tooltip } from "#components/ui/Tooltip";
import { IconPhotoDown } from "@tabler/icons-react";
import { memo, useCallback } from "react";
import * as htmlToImage from "html-to-image";
import { useNodes } from "reactflow";

const label = "Save as image";

export const SaveToImage = memo(() => {
  const nodes = useNodes();
  const board = document.querySelector(".react-flow__viewport") as HTMLElement;

  const onSaveToImage = useCallback(async () => {
    if (board) {
      const source = await htmlToImage.toBlob(board);
      if (!source) return;
      const handle = await window.showSaveFilePicker({
        suggestedName: "untitled.png",
        types: [
          {
            description: "Board capture image",
            accept: {
              "image/png": [".png"],
            },
          },
        ],
      });
      const blob = new Blob([source]);
      const writableStream = await handle.createWritable();
      await writableStream.write(blob);
      await writableStream.close();
    }
  }, [board]);

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
          onClick={onSaveToImage}
          disabled={nodes.length === 0}
        >
          <IconPhotoDown size={20} />
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
