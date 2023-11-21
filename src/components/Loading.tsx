/**
 * BEGIN
 */

import { Box } from "#styled/jsx";
import { memo } from "react";
import { Text } from "#components/ui/Elements";

export const Loading = memo(() => {
  return (
    <Box
      position="absolute"
      inset={0}
      margin="auto"
      w="max"
      h="max"
    >
      <Text
        fontSize="md"
        color="gray.300"
        fontWeight={500}
      >
        Installing Application
      </Text>
    </Box>
  );
});

export default Loading;

/**
 * END
 */
