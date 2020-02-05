import React from "react"
import { ThemeContext } from "styled-components"

import theme, { Body, RootColors } from "@src/styles/theme"
import withMakerTheme from "@src/hoc/withMakerTheme"
import Typography from "@src/styles/typography"

import Header from "@modules/ui/Header"
import Footer from "@modules/ui/Footer"

import ThemeSwitcher from "@modules/ui/ThemeSwitcher"

//Default Layout
const PageLayout = ({ children, seo, hideHeader, hideFooter, makerTheme }) => {
  console.log("Page Layout", makerTheme)
  return (
    <ThemeContext.Provider value={theme(makerTheme)}>
      <Header />
      {children}
      <Footer />
      <ThemeSwitcher />
      {/* Global Styles */}
      <Body />
      <RootColors />
      <Typography />
    </ThemeContext.Provider>
  )
}

export default withMakerTheme(PageLayout)
