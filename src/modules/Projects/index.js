import React from "react"
import styled from "styled-components"

import {
  SectionWrapperProjects,
  ProjectBackground,
  ProjectsContainer,
} from "./Layout"
import {
  ProjectCategoryListContainer,
  ProjectCategoryList,
  CategoryContainer,
  CategoryChart,
  CategoryNumber,
  CategoryButton,
  Category,
} from "./Category"

const Project = () => <></>

//Layout
Project.Section = SectionWrapperProjects
Project.Section.Background = ProjectBackground
Project.Container = ProjectsContainer

//Category
Project.Category = Category
Project.Category.List = ProjectCategoryList
Project.Category.ListContainer = ProjectCategoryListContainer
Project.Category.Container = CategoryContainer
Project.Category.Chart = CategoryChart
Project.Category.Number = CategoryNumber
Project.Category.Button = CategoryButton

export default Project
