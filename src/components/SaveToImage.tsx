/**
 * BEGIN
 */

import { Button } from "#components/ui/Button";
import { Tooltip } from "#components/ui/Tooltip";
import { IconPhotoDown } from "@tabler/icons-react";
import { memo, useCallback } from "react";
import * as htmlToImage from "html-to-image";
import {
  getRectOfNodes,
  getTransformForBounds,
  useNodes,
  useReactFlow,
} from "reactflow";

const label = "Save as image";
const imageWidth = 1024;
const imageHeight = 768;

type Board = HTMLDivElement | null;

export const SaveToImage = memo(() => {
  const nodes = useNodes();
  const { getNodes } = useReactFlow();
  const board: Board = document.querySelector(".react-flow__viewport");

  const onSaveToImage = useCallback(async () => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2,
    );
    if (board) {
      const source = await htmlToImage.toBlob(board, {
        cacheBust: true,
        backgroundColor: "white",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          transform: `
            translate(
              ${transform[0]}px, 
              ${transform[1]}px) 
              scale(${transform[2]}
            )
          `,
        },
      });
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
  }, [board, getNodes]);

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
