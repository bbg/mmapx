/**
 * BEGIN
 */

import { Token, token } from "#styled/tokens";

export function getHex(name: string) {
  const value = `colors.${name}` as Token;
  return token(value);
}

/**
 * END
 */
