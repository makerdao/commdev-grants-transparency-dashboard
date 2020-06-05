import React from "react"
import { MakerThemeProvider } from "@src/styles/MakerThemeContext"
import PageLayout from "@modules/Layouts/PageLayout"

export const wrapRootElement = ({ element }) => (
  <MakerThemeProvider theme="default">
    <PageLayout>{element}</PageLayout>
  </MakerThemeProvider>
)
