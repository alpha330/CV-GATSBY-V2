import * as React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
