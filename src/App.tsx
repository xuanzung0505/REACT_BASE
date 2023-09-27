import { adminRoute, sharedRoute, userRoute } from '@routes/routes'
import type { routeType } from '@globalTypes/routeType'
import {
  useRoutes
} from 'react-router-dom'
import type { userType } from '@globalTypes/userType'
import PrivateRoute from '@components/PrivateRoute'
import PublicRoute from '@components/PublicRoute'

const ROLE = {
  ADMIN: 1,
  USER: 2
}

const App = () => {
  const user: userType = { name: 'username', password: '123456', role: ROLE.USER }
  const filteredRoute = user.role === ROLE.USER
    ? [...sharedRoute, ...userRoute]
    : [...sharedRoute, ...adminRoute]

  const parseFilteredRouteToRoutes = (filteredRoute: routeType[]) => {
    return filteredRoute.map((route) => {
      return {
        path: route.prop.path,
        element: route.prop.isProtected
          ? <PrivateRoute user={user}>{route.prop.element({ props: {} })!!}</PrivateRoute>
          : <PublicRoute>{route.prop.element({ props: {} })!!}</PublicRoute>
      }
    })
  }
  const routes = useRoutes(parseFilteredRouteToRoutes(filteredRoute))
  return routes
}

export default App
