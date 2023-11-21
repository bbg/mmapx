/**
 * BEGIN
 */

import { IconMaximize, IconMaximizeOff } from "@tabler/icons-react";
import { Button } from "./ui/Button";
import { block } from "million/react";

export const FullScreen = block(
  ({
    onClick,
    value,
  }: {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    value: boolean;
  }) => {
    return (
      <Button
        top={3}
        right={3}
        position="absolute"
        type="button"
        onClick={onClick}
        variant="unstyled"
        _hover={{
          transform: "scale(1.2)",
        }}
      >
        {value ? (
          <IconMaximizeOff
            size={20}
            stroke={2}
          />
        ) : (
          <IconMaximize
            size={20}
            stroke={2}
          />
        )}
      </Button>
    );
  },
);

/**
 * END
 */
