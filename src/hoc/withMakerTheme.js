import React from "react"

import { MakerThemeContext } from "@src/styles/MakerThemeContext"

//NOTE(Rejon): For some odd reason Gatsby won't let me make a functional component for a HOC so I have to use a class here.
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
