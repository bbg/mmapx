/**
 * BEGIN
 */

import ReactDOMClient from "react-dom/client";
import { StrictMode, Suspense, lazy } from "react";
import { ReactFlowProvider } from "reactflow";
import invariant from "#utils/invariant";

import "~/index.css";

export const App = lazy(() => import("~/App"));
export const Controls = lazy(() => import("#components/Controls"));
export const Loading = lazy(() => import("#components/Loading"));

const domNode = document.getElementById("app")!;
invariant(domNode, "Required app element");

const root = ReactDOMClient.createRoot(domNode);

root.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <ReactFlowProvider>
        <Controls />
        <App />
      </ReactFlowProvider>
    </Suspense>
  </StrictMode>,
);

/**
 * END
 */
