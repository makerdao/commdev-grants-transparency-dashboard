import React from "react"
import Header from "@modules/ui/Header"
import Footer from "@modules/ui/Footer"

//Default Layout
export const PageLayout = ({ children, seo, hideHeader, hideFooter }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
