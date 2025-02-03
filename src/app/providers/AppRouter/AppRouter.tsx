import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "./config/routeConfig";
import { Suspense } from "react";

export function AppRouter() {
  const renderWithWrapper = (route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    );

    return <Route key={route.path} path={route.path} element={element} />;
  };

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}
