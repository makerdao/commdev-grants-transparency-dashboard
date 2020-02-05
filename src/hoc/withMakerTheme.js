import React from "react"

import { MakerThemeContext } from "@src/styles/MakerThemeContext"

const withMakerTheme = Page => {
  return class extends React.Component {
    render() {
      return (
        <MakerThemeContext.Consumer>
          {({ currentTheme }) => (
            <Page makerTheme={currentTheme} {...this.props} />
          )}
        </MakerThemeContext.Consumer>
      )
    }
  }
}

export default withMakerTheme
