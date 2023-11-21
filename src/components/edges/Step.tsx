/**
 * BEGIN
 */

import { selectedEdge } from "~/atom";
import { Input } from "#components/ui/Input";
import { Box, HStack } from "#styled/jsx";
import { useAtom } from "jotai";
import { Fragment, useRef } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getSmoothStepPath,
  useReactFlow,
} from "reactflow";
import { P, match } from "ts-pattern";
import { isEmpty, isString, set } from "radash";

export function CustomStepEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  markerStart,
  label,
  selected,
}: EdgeProps) {
  const ref = useRef<HTMLInputElement>(null);
  const { setEdges } = useReactFlow();
  const [getSelectedEdge, resetSelectedEdge] = useAtom(selectedEdge);

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX: sourceX + 10,
    sourceY,
    sourcePosition,
    targetX: targetX - 10,
    targetY,
    targetPosition,
    borderRadius: 0,
  });

  const onEdgeUpdate = () => {
    const value = !isEmpty(ref.current?.value) ? ref.current?.value : null;
    if (getSelectedEdge) {
      setEdges((edges) =>
        edges
          .filter((x) => x.id !== id)
          .concat(set(getSelectedEdge, "label", value)),
      );
      resetSelectedEdge(null);
    }
  };

  const transform = `
    translate(-50%, -50%) 
    translate(${labelX}px, ${labelY}px)
  `;

  return (
    <Fragment>
      <BaseEdge
        path={edgePath}
        markerStart={markerStart}
        markerEnd={markerEnd}
        style={style}
      />
      <EdgeLabelRenderer>
        {match({
          label,
          id,
          getSelectedEdge,
        })
          .with(
            {
              getSelectedEdge: P.select({
                id: id,
              }),
            },
            (e) => (
              <HStack
                position="absolute"
                fontSize="sm"
                pointerEvents="all"
                className="nodrag nopan"
                style={{ transform }}
                zIndex={1001}
              >
                <Input
                  ref={ref}
                  autoFocus
                  size="sm"
                  variant="edge"
                  onBlur={() => onEdgeUpdate()}
                  onKeyUp={(event) => {
                    if (event.key === "Enter") {
                      onEdgeUpdate();
                    }
                  }}
                  {...(isString(e.label)
                    ? {
                        defaultValue: e.label,
                      }
                    : {})}
                />
              </HStack>
            ),
          )
          .with(
            {
              label: P.select(P.not(P.nullish)),
            },
            () => (
              <Box
                key={id}
                display="flex"
                alignItems="center"
                bgColor="white"
                className="nodrag nopan"
                color={selected ? "blue.500" : "gray.400"}
                fontWeight={selected ? 600 : 400}
                position="absolute"
                fontSize="sm"
                pointerEvents="all"
                style={{ transform }}
                lineHeight={1}
                p={2}
                pt={1}
                zIndex={1001}
              >
                {label}
              </Box>
            ),
          )
          .otherwise(() => null)}
      </EdgeLabelRenderer>
    </Fragment>
  );
}

/**
 * END
 */
