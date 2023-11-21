/**
 * BEGIN
 */

import { restoreAlertVisible, storage } from "~/atom";
import { Button } from "#components/ui/Button";
import { Tooltip } from "#components/ui/Tooltip";
import * as Dialog from "#components/ui/Dialog";
import { HStack } from "#styled/jsx";
import { IconRestore } from "@tabler/icons-react";
import { Fragment, memo, useCallback } from "react";
import { useNodes, useReactFlow } from "reactflow";
import { P, match } from "ts-pattern";
import { useAtom, useAtomValue } from "jotai";
import { Portal } from "@ark-ui/react";

const label = "Restore";
const title = "Restore Board";
const desc = "Restore your board saved on {d} {t}?";
const cancelBtn = "Cancel";
const restoreBtn = "Restore";

export const Restore = memo(() => {
  const data = useAtomValue(storage);
  const { setNodes, setEdges, setViewport } = useReactFlow();
  const nodes = useNodes();
  const [dialogVisible, setDialogVisible] = useAtom(restoreAlertVisible);

  const onRestore = useCallback(() => {
    if (data) {
      setNodes((nds) => nds.concat(data.nodes));
      setEdges((eds) => eds.concat(data.edges));
      setViewport(data.viewport);
    }
  }, [data, setEdges, setNodes, setViewport]);

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
            aria-label={label}
            onClick={() => setDialogVisible(true)}
            disabled={!data || nodes.length !== 0}
          >
            <IconRestore size={20} />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>{label}</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
      <Dialog.Root
        open={dialogVisible}
        lazyMount
        unmountOnExit
        onExitComplete={() => setDialogVisible(false)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content size="md">
              <Dialog.Title>{title}</Dialog.Title>
              {match({ data })
                .with(
                  {
                    data: P.select(P.not(P.nullish)),
                  },
                  ({ createdAt: dt }) => (
                    <Dialog.Description mt={1}>
                      {desc
                        .replace("{d}", new Date(dt).toDateString())
                        .replace("{t}", new Date(dt).toLocaleTimeString())}
                    </Dialog.Description>
                  ),
                )
                .otherwise(() => null)}
              <HStack
                mt={5}
                w="max-content"
                ml="auto"
              >
                <Dialog.CloseTrigger>
                  <Button
                    variant="outline"
                    size="md"
                    type="reset"
                  >
                    {cancelBtn}
                  </Button>
                </Dialog.CloseTrigger>
                <Button
                  variant="confirm"
                  size="md"
                  type="submit"
                  onClick={() => {
                    onRestore();
                    setDialogVisible(false);
                  }}
                >
                  {restoreBtn}
                </Button>
              </HStack>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Fragment>
  );
});

/**
 * END
 */
