/**
 * BEGIN
 */

import { atomWithStorage } from "jotai/utils";
import {
  EDGES_KEY,
  NODES_KEY,
  STORAGE_KEY,
  VIEWPORT_KEY as VP_KEY,
} from "~/constants";
import { FlowStorage } from "~/types";
import { atom } from "jotai";
import {
  Edge,
  Node,
  OnConnectStartParams,
  ReactFlowInstance,
  Viewport,
} from "reactflow";
import { ContextMenuProps } from "#components/EdgeContextMenu";

export const nodesStorage = atomWithStorage<Node[]>(NODES_KEY, []);
export const edgesStorage = atomWithStorage<Edge[]>(EDGES_KEY, []);
export const viewportStorage = atomWithStorage<Viewport | null>(VP_KEY, null);
export const storage = atomWithStorage<FlowStorage>(STORAGE_KEY, null);
export const rfInstance = atom<ReactFlowInstance | null>(null);
export const addTextModalVisible = atom(false);
export const addTextModalFullScreen = atom(false);
export const selectedNode = atom<Node | null>(null);
export const selectedEdge = atom<Edge | null>(null);
export const resetAlertVisible = atom(false);
export const restoreAlertVisible = atom(false);
export const edgeBoundingClientRect = atom<ContextMenuProps | null>(null);
export const connectStart = atom<OnConnectStartParams | null>(null);
export const connectEnd = atom<MouseEvent | TouchEvent | null>(null);

selectedNode.debugLabel = "Doubleclick Selected Node";
selectedEdge.debugLabel = "Doubleclick Selected Edge";

/**
 * END
 */
