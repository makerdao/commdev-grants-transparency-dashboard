import React, { createContext, useState } from "react"

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
