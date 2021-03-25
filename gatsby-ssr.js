const React = require("react")
import PageLayout from "@modules/Layouts/PageLayout"
import { MakerThemeProvider } from "@src/styles/MakerThemeContext"

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
  return (
    <MakerThemeProvider>
      <PageLayout>{element}</PageLayout>
    </MakerThemeProvider>
  )
}
