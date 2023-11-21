/**
 * BEGIN
 */

import { useCallback, useRef } from "react";
import { Box } from "#styled/jsx";
import ReactFlow, {
  Edge,
  Connection,
  addEdge,
  ConnectionLineType,
  Background,
  MiniMap,
  Controls,
  MarkerType,
  EdgeMouseHandler,
  applyNodeChanges,
  OnNodesChange,
  applyEdgeChanges,
  OnEdgesChange,
  OnConnectStart,
  OnConnectEnd,
} from "reactflow";
import { TextNode } from "#components/nodes/Text";
import { useAtom, useSetAtom } from "jotai";
import {
  connectEnd,
  connectStart,
  edgeBoundingClientRect,
  edgesStorage,
  nodesStorage,
  rfInstance,
  selectedEdge,
} from "~/atom";
import { DEFAULT_EDGE_OPTS } from "~/constants";
import { CustomStepEdge } from "#components/edges/Step";
import { EdgeContextMenu } from "#components/EdgeContextMenu";
import { token } from "#styled/tokens";
import { ConnectionLine } from "#components/ConnectionLine";
import { getHex } from "#utils/getHex";
import { DevTools } from 'jotai-devtools'

const nodeTypes = {
  text: TextNode,
};

const edgeTypes = {
  floating: CustomStepEdge,
};

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useAtom(nodesStorage);
  const [edges, setEdges] = useAtom(edgesStorage);
  const [getMenuRect, setMenuRect] = useAtom(edgeBoundingClientRect);
  const setRfInstance = useSetAtom(rfInstance);
  const setSelectEdge = useSetAtom(selectedEdge);
  const setConnectStart = useSetAtom(connectStart);
  const setConnectEnd = useSetAtom(connectEnd);

  const onNodesChange: OnNodesChange = useCallback(
    (c) => setNodes((n) => applyNodeChanges(c, n)),
    [setNodes],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (c) => setEdges((e) => applyEdgeChanges(c, e)),
    [setEdges],
  );

  const onConnectStart: OnConnectStart = useCallback(
    (_, values) => setConnectStart(values),
    [setConnectStart],
  );

  const onConnectEnd: OnConnectEnd = useCallback(
    (event) => setConnectEnd(event),
    [setConnectEnd],
  );

  const onConnect = useCallback(
    (connection: Edge | Connection) =>
      setEdges((e) =>
        addEdge(
          {
            ...connection,
            type: "floating",
            animated: false,
            markerStart: {
              type: MarkerType.ArrowClosed,
              width: 25,
              height: 25,
              color: getHex("gray.200"),
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 25,
              height: 25,
              color: getHex("gray.200"),
            },
          },
          e,
        ),
      ),
    [setEdges],
  );

  const onEdgeContextMenu: EdgeMouseHandler = useCallback(
    (e, edge) => {
      if (ref.current) {
        e.preventDefault();
        const p = ref.current.getBoundingClientRect();
        const r = {
          id: edge.id,
          top: e.clientY < p.height - 200 ? e.clientY : 0,
          left: e.clientX < p.width - 200 ? e.clientX : 0,
        };
        setMenuRect(r);
      }
    },
    [setMenuRect],
  );

  const onOutsideClick = useCallback(() => setMenuRect(null), [setMenuRect]);

  return (
    <Box
      w="screen"
      h="screen"
    >
      <DevTools/>
      <ReactFlow
        ref={ref}
        nodes={nodes}
        edges={edges}
        minZoom={1}
        maxZoom={5}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setRfInstance}
        connectionLineType={ConnectionLineType.Straight}
        connectionLineComponent={ConnectionLine}
        defaultEdgeOptions={DEFAULT_EDGE_OPTS}
        attributionPosition="top-right"
        onEdgeDoubleClick={(_e, n) => setSelectEdge(n)}
        onEdgeContextMenu={onEdgeContextMenu}
        onPaneClick={onOutsideClick}
        onEdgeClick={onOutsideClick}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        elevateEdgesOnSelect
        fitView={true}
        fitViewOptions={{ maxZoom: 1 }}
      >
        <Background color={token("colors.gray.300")} />
        <Controls />
        {getMenuRect && <EdgeContextMenu />}
        <MiniMap
          zoomable
          pannable
        />
      </ReactFlow>
    </Box>
  );
}

export default App;

/**
 * END
 */
