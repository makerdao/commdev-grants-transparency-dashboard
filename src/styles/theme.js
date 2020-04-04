import { extend } from "@src/utils"

import { createGlobalStyle } from "styled-components"
import { primaryFont } from "./typography"

export const appThemes = ["default", "dark"]

export const Body = createGlobalStyle`
    body {
        width: 100%;
        margin: 0px;
        background: var(--background-gradient--maker);
    }
`

export const RootColors = createGlobalStyle`
    :root {
        --headline-color: ${({ theme: { colors } }) => colors.headline_color};
        --subheadline-color: ${({ theme: { colors } }) => colors.maker_teal};
        --body-color: ${({ theme: { colors } }) => colors.body_color};
        --highlight-color--makerteal: ${({ theme: { colors } }) =>
          colors.maker_teal};
        --highlight-color--makerorange: ${({ theme: { colors } }) =>
          colors.maker_orange};
        --highlight-color--makerblue: ${({ theme: { colors } }) =>
          colors.maker_blue};
        --background-gradient--maker: ${({ theme: { colors } }) =>
          colors.bg_gradient};
    }
`

const themes = {
  fontFamily: {
    sans_serif: `"${primaryFont}", system-ui, "Helvetica Neue", sans-serif`,
  },
  colors: {
    body_color: "#53546a",
    headline_color: "#291a42",
    maker_teal: "#179b8c",
    maker_orange: "#f5b13d",
    maker_blue: "#08529b",
    bg_gradient:
      "linear-gradient(180deg, rgba(182, 237, 231, 0.38) 0%, rgba(253, 193, 52, 0.15) 100%)",
  },
  //NOTE(Rejon): You can put your dark theme here. This is just here for testing.
  // dark: {
  //   colors: {
  //     body_color: "#dbd3e8",
  //     headline_color: "#e6d8fe",
  //     maker_teal: "#50d4c4",
  //     maker_orange: "#fac469",
  //     maker_blue: "#0b77e0",
  //     bg_gradient:
  //       "linear-gradient( 180deg, hsla(173, 68%, 12%, 1) 0%, hsla(42, 75%, 9%, 1) 100% )",
  //   },
  // },
}

//NOTE(Rejon): This is the heart of the theme system.
//             TLDR; Theme is called and a themename(string) is passed in.
//              The theme is then assigned and DEEP Merges the default theme for anything that's missing.
export default themeName => {
  //Themename is not default, null, undefined, and the theme exists in the theme object.
  if (
    themeName !== "default" &&
    themeName !== null &&
    themeName !== undefined &&
    themes[themeName] !== undefined
  ) {
    //Get a copy of the themes object
    let selectedTheme = Object.assign({}, themes[themeName])

    //Return the "themed" object
    return extend(true, themes, selectedTheme)
  } else {
    //Default theme or No theme provided or Theme doesn't exist, return entire object.
    return themes
  }
}
