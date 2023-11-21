/**
 * BEGIN
 */

import {
  getAssetFromKV,
  serveSinglePageApp,
} from "@cloudflare/kv-asset-handler";
import manifestJSON from "__STATIC_CONTENT_MANIFEST";
const assetManifest = JSON.parse(manifestJSON);

export interface Env {
  __STATIC_CONTENT: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
          mapRequestToAsset: serveSinglePageApp,
        },
      );
    } catch (e) {
      const pathname = new URL(request.url).pathname;
      return new Response(`"${pathname}" not found`, {
        status: 404,
        statusText: "not found",
      });
    }
  },
};

/**
 * END
 */
