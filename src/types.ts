/**
 * BEGIN
 */

import { Edge, Viewport, Node } from "reactflow";

export type FlowStorage = {
  nodes: Node[];
  edges: Edge[];
  viewport: Viewport;
  createdAt: string;
} | null;

/**
 * END
 */
