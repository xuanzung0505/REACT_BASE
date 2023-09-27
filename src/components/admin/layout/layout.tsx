// import Footer from '@components/user/footer/footer'
// import Header from '@components/user/header/header'
import './layout.scss'

const AdminLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="layout">
      <header />
      <div className="layout-content">{children}</div>
      <footer />
    </div>
  )
}

export default AdminLayout
