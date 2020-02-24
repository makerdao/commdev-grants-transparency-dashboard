import React, { useContext, useCallback } from "react"

import { appThemes } from "@src/styles/theme"
import { MakerThemeContext } from "@src/styles/MakerThemeContext"

/**
 * ThemeSwitcher - Rejon Taylor-Foster (Feb 4, 2020)
 *
 * A Select component that makes use of the MakerThemeContext by
 * pulling in the currentTheme and available appThemes.
 *
 * You can switch the theme and the app will update all of it's colors on the fly.
 *
 * NOTE(Rejon):This is purely for example on how to switch themes.
 *             It does not include saving your current theme to localStorage/cookies
 */
const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useContext(MakerThemeContext)

  const onThemeChange = useCallback(
    e => {
      setTheme(e.target.value)
      console.log(e)
    },
    [setTheme]
  )

  return (
    <select defaultValue={currentTheme} onBlur={onThemeChange}>
      {appThemes.map(theme => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  )
}

export default ThemeSwitcher
