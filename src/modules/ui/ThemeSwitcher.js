import React, { useContext, useCallback } from "react"

// your theme provider
import { appThemes } from "@src/styles/theme"
import { MakerThemeContext } from "@src/styles/MakerThemeContext"

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useContext(MakerThemeContext)

  const onThemeChange = useCallback(
    ({ target }) => {
      setTheme(target.value)
    },
    [setTheme]
  )

  return (
    <select defaultValue={currentTheme} onChange={onThemeChange}>
      {appThemes.map(theme => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  )
}

export default ThemeSwitcher
