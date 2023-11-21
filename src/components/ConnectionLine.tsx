/**
 * BEGIN
 */

import { styled } from "#styled/jsx";
import { memo } from "react";
import { ConnectionLineComponentProps } from "reactflow";

const G = styled("g");
const Circle = styled("circle");
const Path = styled("path");

export const ConnectionLine = memo(
  ({
    fromX,
    fromY,
    toX,
    toY,
    connectionStatus,
  }: ConnectionLineComponentProps) => {
    const isValid = connectionStatus === "valid";
    const fill = isValid ? "green.500" : "blue.500";

    return (
      <G>
        <Circle
          cx={fromX}
          cy={fromY}
          fill={fill}
          r={5}
          strokeWidth={3}
        />
        <Path
          fill="none"
          stroke={fill}
          strokeDasharray={5}
          strokeWidth={2}
          d={`M${fromX},${fromY} ${toX},${toY}`}
          className="animated"
        />
        <Circle
          cx={toX}
          cy={toY}
          fill={fill}
          r={5}
          strokeWidth={3}
        />
      </G>
    );
  },
);

/**
 * END
 */
