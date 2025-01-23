import { createRequestHandler } from "react-router";
// import { type ServerBuild } from "react-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore This file won’t exist if it hasn’t yet been built
import * as build from "./build/server"; // eslint-disable-line import/no-unresolved

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const handleRemixRequest = createRequestHandler(build as any as ServerBuild);
const requestHandler = createRequestHandler({
  build
});

export default {
  async fetch(request, env, ctx) {
    return requestHandler(request, {
      cloudflare: { env, ctx }
    });
  },
} satisfies ExportedHandler<Env>;
