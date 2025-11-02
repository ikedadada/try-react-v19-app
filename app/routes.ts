import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/v19-demo.tsx"),
  route("react-19-2", "routes/react-19-2.tsx"),
] satisfies RouteConfig;
