import { RouteProps } from "react-router-dom";
import { AppRoutes, routeHome } from "@/shared/const/router";
import { HomePage } from "@/pages/HomePage";

export enum AppRouteAccess {
  PUBLIC = "public",
  PRIVATE = "private",
  ADMIN = "admin",
}

export type AppRouteProps = RouteProps & {
  access: AppRouteAccess;
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.HOME]: {
    path: routeHome,
    element: <HomePage />,
    access: AppRouteAccess.PUBLIC,
  },
};
