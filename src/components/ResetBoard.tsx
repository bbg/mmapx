/**
 * BEGIN
 */

import { Button } from "#components/ui/Button";
import { Tooltip } from "#components/ui/Tooltip";
import { IconTrash } from "@tabler/icons-react";
import { Fragment, useCallback } from "react";
import { useNodes, useReactFlow } from "reactflow";
import * as Dialog from "#components/ui/Dialog";
import { HStack } from "#styled/jsx";
import { Portal } from "@ark-ui/react";
import { useAtom } from "jotai";
import { resetAlertVisible } from "~/atom";

const label = "Reset the board";
const title = "Reset Board";
const desc = "This will clear the whole board. Are you sure?";
const cancelBtn = "Cancel";
const resetBtn = "Reset";

export const ResetBoard = () => {
  const flow = useReactFlow();
  const nodes = useNodes();
  const [alertVisible, setAlertVisible] = useAtom(resetAlertVisible);

  const onClear = useCallback(() => {
    const data = {
      nodes: flow.getNodes(),
      edges: flow.getEdges(),
    };
    flow.deleteElements(data);
  }, [flow]);

  return (
    <Fragment>
      <Tooltip.Root
        lazyMount
        openDelay={300}
        closeDelay={100}
      >
        <Tooltip.Trigger asChild>
          <Button
            variant="toolbar"
            size="md"
            disabled={nodes.length === 0}
            onClick={() => setAlertVisible(true)}
          >
            <IconTrash size={20} />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>{label}</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
      <Dialog.Root
        open={alertVisible}
        lazyMount
        unmountOnExit
        onExitComplete={() => setAlertVisible(false)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content size="md">
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.Description>{desc}</Dialog.Description>
              <HStack
                mt={5}
                w="max-content"
                ml="auto"
              >
                <Dialog.CloseTrigger asChild>
                  <Button
                    variant="outline"
                    size="md"
                    type="reset"
                  >
                    {cancelBtn}
                  </Button>
                </Dialog.CloseTrigger>
                <Button
                  variant="danger"
                  size="md"
                  type="submit"
                  onClick={() => {
                    onClear();
                    setAlertVisible(false);
                  }}
                >
                  {resetBtn}
                </Button>
              </HStack>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Fragment>
  );
};

/**
 * END
 */
