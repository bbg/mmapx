/**
 * BEGIN
 */

import { hstack } from "#styled/patterns";
import { DefaultEdgeOptions, HandleProps, Position } from "reactflow";

export const APP_NAME = "MMapx";
export const STORAGE_KEY = "mmapx-flow";
export const NODES_KEY = "mmapx-nodes";
export const EDGES_KEY = "mmapx-edges";
export const VIEWPORT_KEY = "mmapx-viewport";

export const COLORS = [
  "gray.200",
  "red.200",
  "orange.200",
  "amber.200",
  "yellow.200",
  "green.200",
  "emerald.200",
  "teal.200",
  "cyan.200",
  "sky.200",
  "blue.200",
  "indigo.200",
  "violet.200",
  "purple.200",
  "fuchsia.200",
  "pink.200",
  "rose.200",
];

export const HANDLE_LEFT: HandleProps = {
  type: "target",
  position: Position.Left,
};

export const HANDLE_RIGHT: HandleProps = {
  type: "source",
  position: Position.Right,
};

export const HANDLE_TOP: HandleProps = {
  type: "source",
  position: Position.Top,
};

export const HANDLE_BOTTOM: HandleProps = {
  type: "target",
  position: Position.Bottom,
};

export const DEFAULT_EDGE_OPTS: DefaultEdgeOptions = {
  animated: false,
  type: "step",
  zIndex: 0,
};

export const TOOLBAR_PROPS = {
  position: Position.Top,
  className: hstack(),
};

/**
 * END
 */
