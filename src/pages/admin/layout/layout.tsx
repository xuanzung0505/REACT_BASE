import Footer from '@components/user/Footer/Footer'
import Header from '@pages/admin/header/header'
import './layout.scss'

export default function Layout ({ children }: { children: JSX.Element }) {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  )
}
