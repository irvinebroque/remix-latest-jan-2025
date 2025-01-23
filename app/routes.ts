import { type RouteConfig, route } from "@react-router/dev/routes";  

  export default [
    route("/foo", "./routes/foo.tsx"),
  ] satisfies RouteConfig;
  