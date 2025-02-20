const createRouteConfig = (routeImports: string[], routeDefinition: string) => {
  return `
import { createRouteLoader, WrapRouteComponent, RouteErrorComponent } from '@ice/runtime';
import type { CreateRoutes } from '@ice/runtime';
${routeImports.length ? `${routeImports.join('\n')}\n\n` : ''}
const createRoutes: CreateRoutes = ({
  requestContext,
  renderMode,
}) => ([
  ${routeDefinition}
]);
export default createRoutes;
  `;
};

export default createRouteConfig;
