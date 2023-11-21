/**
 * BEGIN
 */

import { z } from "zod";

const content = {
  invalid_type_error: "Invalid content",
  required_error: "Content is required",
};

const color = {
  invalid_type_error: "Invalid content",
  required_error: "Color is required",
};

const min = "Content must contain at least 5 character(s)";

export const TextNodeDataSchema = z.object({
  content: z.string(content).min(1, min),
  color: z.string(color),
  emoji: z.string().optional(),
  borderColor: z.string().optional(),
  backgroundColor: z.string().optional(),
});

export type TextNodeDataSchema = z.infer<typeof TextNodeDataSchema>;

/**
 * END
 */
