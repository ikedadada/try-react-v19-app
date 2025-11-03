import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/v19.tsx"),
  route("v19-2", "routes/v19-2.tsx"),
] satisfies RouteConfig;
