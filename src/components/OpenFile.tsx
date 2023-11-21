/**
 * BEGIN
 */

import { Button } from "#components/ui/Button";
import { Tooltip } from "#components/ui/Tooltip";
import { FlowStorage } from "~/types";
import { IconFolderUp } from "@tabler/icons-react";
import { memo, useCallback } from "react";
import { useKeyPress, useReactFlow } from "reactflow";

const label = "Open file";

export const OpenFile = memo(() => {
  const { setNodes, setEdges, setViewport } = useReactFlow();
  const cmdAndSPressed = useKeyPress(["Meta+o", "Strg+o"], { target: window });

  const onOpenFile = useCallback(async () => {
    const opts: OpenFilePickerOptions = {
      excludeAcceptAllOption: true,
      multiple: false,
      types: [
        {
          description: "MMAPX File",
          accept: {
            "application/json": [".mmapx"],
          },
        },
      ],
    };
    const [fileHandle] = await window.showOpenFilePicker(opts);
    const file = await fileHandle.getFile();
    const json: FlowStorage = JSON.parse(await file.text());
    if (json) {
      setNodes(json.nodes);
      setEdges(json.edges);
      setViewport(json.viewport);
    }
  }, [setEdges, setNodes, setViewport]);

  if (cmdAndSPressed) {
    onOpenFile();
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
          onClick={onOpenFile}
        >
          <IconFolderUp size={20} />
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
