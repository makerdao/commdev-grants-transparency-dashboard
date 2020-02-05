import React, { createContext, useState } from "react"

/**
 * MakerThemeContext - Rejon Taylor-Foster (Feb 4, 2020)
 *
 * This is the context and provider methods that provide the app's current theme.
 *
 * MakerThemeContext can be used anywhere with useContext or by wrapping a component
 * in the HOC withMakerTheme (to have it passed in by props).
 *
 * MakerThemeProvider is primarily used in gatsby-browser.js to provide the theme to
 * the entire app.
 *
 * theme(string): Current app theme.
 *
 * NOTE(Rejon): Key name must match with theme wanted, else entire default theme is passed.
 */
export const MakerThemeContext = createContext({
  currentTheme: "default",
  setTheme: theme => {},
})

export const MakerThemeProvider = ({ theme, children }) => {
  const [currentTheme, setTheme] = useState(theme)

  return (
    <MakerThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </MakerThemeContext.Provider>
  )
}
