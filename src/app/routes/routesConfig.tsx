import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

// types
import { RouteShape } from "@/app/types/route.type";

// guards
import AuthGuard from "@/app/guards/AuthGuard";
import GuestGuard from "@/app/guards/GuestGuard";

// layouts
import MainLayout from "@/app/layouts/MainLayout";

// utils
import { USER_ROLE } from "@/app/utils/userRole";

// modules
const Error403 = lazy(() => import("@/app/modules/Error403"));
const Error404 = lazy(() => import("@/app/modules/Error404"));
const SignUp = lazy(() => import("@/app/modules/SignUp"));
const SignIn = lazy(() => import("@/app/modules/SignIn"));
const Home = lazy(() => import("@/app/modules/Home"));
const Test = lazy(() => import("@/app/modules/Test"));

export const routesConfig: RouteShape[] = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to="/home" />,
  },
  {
    exact: true,
    path: "/403",
    component: Error403,
  },
  {
    exact: true,
    path: "/404",
    component: Error404,
  },
  {
    exact: true,
    path: "/signup",
    guard: GuestGuard,
    component: SignUp,
  },
  {
    exact: true,
    path: "/signin",
    guard: GuestGuard,
    component: SignIn,
  },
  {
    path: "/",
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: "/home",
        component: Home,
        requireRoles: [USER_ROLE.USER],
      },
      {
        exact: true,
        path: "/test",
        component: Test,
        requireRoles: [USER_ROLE.USER],
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
];
