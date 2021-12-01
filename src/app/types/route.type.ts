import React, { ComponentType } from "react";

type CommonType = {
  exact?: boolean;
  path?: string;
  guard?:
    | React.LazyExoticComponent<ComponentType<unknown>>
    | ComponentType<unknown>;
  layout?: React.FunctionComponent;
  component?: any;
  requireRoles?: string[] | [];
};

export type RouteShape = CommonType & {
  routes?: CommonType[];
};
