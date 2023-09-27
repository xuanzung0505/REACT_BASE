import Footer from '@components/user/footer/footer'
import Header from '@components/user/header/header'
import './layout.scss'

const UserLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  )
}
export default UserLayout
