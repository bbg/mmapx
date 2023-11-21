/**
 * BEGIN
 */

import { COLORS } from "~/constants";
import { RadioGroup } from "#components/ui/RadioGroup";
import { getHex } from "#utils/getHex";
import { IconCheck } from "@tabler/icons-react";
import { FieldProps } from "formik";
import { FC, memo } from "react";

export const ColorPicker: FC<FieldProps> = memo(
  ({ field: { value, name, ...fieldProps } }) => {
    return (
      <RadioGroup.Root
        name={name}
        defaultValue={value}
        display="flex"
        alignItems="center"
        columnGap={1}
        {...fieldProps}
      >
        <RadioGroup.Indicator
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={6}
          h={6}
          rounded="full"
          animation="none"
        >
          <IconCheck
            size={15}
            stroke={3}
            color={getHex(value.replace("200", "600"))}
          />
        </RadioGroup.Indicator>
        {COLORS.map((color) => (
          <RadioGroup.Item
            display="flex"
            alignItems="center"
            key={color}
            value={color}
            _hover={{
              cursor: "pointer",
            }}
          >
            <RadioGroup.ItemControl
              w={6}
              h={6}
              bgColor={color}
              rounded="full"
            />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    );
  },
);

/**
 * END
 */
