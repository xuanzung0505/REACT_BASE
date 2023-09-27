import type { routeType } from '@globalTypes/routeType'
import { homePage as adminHomePage } from '@pages/admin/home/homePage'
import Animation from '@pages/shared/animation'
import LifeCycle from '@pages/shared/lifeCycle'
import Login from '@pages/shared/login'
import { homePage as userHomePage } from '@pages/user/home/homePage'

const userRoute: routeType[] = [
  {
    prop:
    {
      id: 'HomePage',
      path: '/',
      element: userHomePage,
      isProtected: false
    }
  }
]

const adminRoute: routeType[] = [
  {
    prop:
    {
      id: 'HomePage',
      path: '/',
      element: adminHomePage,
      isProtected: false
    }
  }
]

const sharedRoute: routeType[] = [
  {
    prop:
    {
      id: 'LoginPage',
      path: '/login',
      element: Login,
      isProtected: false
    }
  },
  {
    prop:
    {
      id: 'LifecyclePage',
      path: '/life-cycle',
      element: LifeCycle,
      isProtected: false
    }
  },
  {
    prop:
    {
      id: 'AnimationPage',
      path: '/animation',
      element: Animation,
      isProtected: false
    }
  }
]

export { userRoute, adminRoute, sharedRoute }
