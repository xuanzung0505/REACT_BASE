
const PublicRoute = ({ children }: { children: JSX.Element }) => {
//   const location = useLocation();
//   const user = readUserLocalStorage();
//   if (location.pathname === '/login' && Object.keys(user).length > 0) {
//     return <Navigate to="/" />
//   }
  return (
    <main className="main-content">{children}</main>
  )
}

export default PublicRoute
