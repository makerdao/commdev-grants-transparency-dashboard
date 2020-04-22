import React from "react"
import { ThemeContext } from "styled-components"

import theme, { Body, RootColors } from "@src/styles/theme"
import withMakerTheme from "@src/hoc/withMakerTheme"
import Typography from "@src/styles/typography"

import Header from "@modules/ui/Header"

import ThemeSwitcher from "@modules/ui/ThemeSwitcher"

/**
 * PageLayout - Rejon Taylor-Foster (Feb 2, 2020)
 *
 * This is the default page layout that wraps the entire app.
 * It is used primarily in gatsby-browser.js to provide a few things:
 *
 * + ThemeContext from styled-components so we can apply theme to all styled components
 *   in the form of props.theme.xxx. See more about it here: https://styled-components.com/docs/advanced#theming
 *
 * + Header and Footer components we'd expect on every page.
 *
 * + Global Themes (Body, RootColors, Typography) instead of using global.css
 *
 * + ThemeSwitcher just for example.
 *
 * This component also gets wrapped in the HOC withMakerTheme to ensure that this component
 * consumes the maker theme from context.
 */
const PageLayout = ({ children, hideHeader, hideFooter, makerTheme }) => {
  return (
    <ThemeContext.Provider value={theme(makerTheme)}>
      {!hideHeader && <Header />}
      {children}
      {/* Commented out since it's purely for example. */}
      {/* <ThemeSwitcher /> */}

      {/* Global Styles */}
      <Body />
      <RootColors />
      <Typography />
    </ThemeContext.Provider>
  )
}

export default withMakerTheme(PageLayout)
