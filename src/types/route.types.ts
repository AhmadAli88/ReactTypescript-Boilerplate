// src/types/route.types.ts
import { ReactElement } from 'react';

export interface RouteConfig {
  path: string;
  element: ReactElement;
  children?: RouteConfig[];
}
