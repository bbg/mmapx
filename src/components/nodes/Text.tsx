/**
 * BEGIN
 */

import { HANDLE_LEFT, HANDLE_RIGHT } from "~/constants";
import { FC, Fragment, useCallback, useMemo } from "react";
import { Handle, Node, NodeProps, NodeResizer, useReactFlow } from "reactflow";
import { block } from "million/react";
import { Stack } from "#styled/jsx";
import { useSetAtom } from "jotai";
import { selectedNode } from "~/atom";
import { marked } from "marked";

type NodeData = {
  content: string;
};

export const TextNode: FC<NodeProps<NodeData>> = block(
  ({ id, data, selected }) => {
    const { getNode } = useReactFlow();
    const setSelectedNode = useSetAtom(selectedNode);

    const onDoubleClick = useCallback(
      () => setSelectedNode(getNode(id) as Node),
      [getNode, id, setSelectedNode],
    );

    const content = useMemo(
      () => ({
        __html: marked
          .use({
            pedantic: false,
            gfm: true,
          })
          .parse(data.content),
      }),
      [data.content],
    );

    return (
      <Fragment>
        <Stack
          w="full"
          h="full"
          overflow="hidden"
          dangerouslySetInnerHTML={content}
          onDoubleClick={onDoubleClick}
        />
        <NodeResizer isVisible={selected} />
        <Handle {...HANDLE_LEFT} />
        <Handle {...HANDLE_RIGHT} />
      </Fragment>
    );
  },
);

/**
 * END
 */
