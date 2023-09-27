import UserLayout from '@components/user/layout/layout'
import AdminLayout from '@components/admin/layout/layout'
import type { userType } from '@globalTypes/userType'

const ROLE = {
  ADMIN: 1,
  USER: 2
}

const PrivateRoute = ({ children, user }: { children: JSX.Element, user: userType }) => {
  // const user = readUserLocalStorage();

  // if (!user.accessToken) {
  //   return <Navigate to="/login" />;
  // }
  return user.role === ROLE.ADMIN
    ? (
      <AdminLayout>
        {children}
      </AdminLayout>
    )
    : (
      <UserLayout>
        {children}
      </UserLayout>
    )
}

export default PrivateRoute
