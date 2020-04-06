import React, { useState } from "react"
import styled from "styled-components"

import SectionTitle from "@modules/ui/SectionTitle"
import { PrimaryButton } from "@modules/ui/PrimaryButton"

import { grantsData, pieData } from "@src/utils"
import { pType } from "@static/data/dataformat"

import Project from "@modules/Projects"

//TODO: refactor component to be more modular & accept different data fields, or rename to specify that it displays grant stats
const data = grantsData;

const ViewMoreButtonContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin: 1.5rem;
`

const ViewMoreButton = styled(PrimaryButton)`
  opacity: 1;
  justify-self: center;
  font-size: 1.5rem;
  padding: 0.875rem 1.5rem 0.875rem 1.5rem;
  border: 1px solid #1aab9b;
  color: #1aab9b;
  border-radius: 100px;

  :hover {
    cursor: pointer;
    transform: translateY(10%);
  }
`

const ProjectList = props => {
  const cardsPerPage = 10
  const categories = ["All"].concat(Object.values(pType))

  const [displayType, setDisplayType] = useState("All")
  const [projectsToShow, setProjectsToShow] = useState(cardsPerPage)
  const [projectsForCurrentCategory, setprojectsForCurrentCategory] = useState(
    data.acceptedProjects
  )

  const setType = type => {
    let desiredType = type
    let nextprojectsForCurrentCategory =
      desiredType === "All"
        ? data.acceptedProjects
        : data.acceptedProjects.filter(p => p.type === desiredType)

    setDisplayType(desiredType)
    setProjectsToShow(cardsPerPage)
    setprojectsForCurrentCategory(nextprojectsForCurrentCategory)
  }

  return (
    <Project.Wrapper large name="Projects">
      <SectionTitle colorMakerTeal="true">
        Explore our supported projects
      </SectionTitle>
      <Project.Category.ListContainer>
        <Project.Category.List>
          {categories.map(type => (
            <Project.Category
              key={type.toString()}
              label={type}
              data={pieData("type", type)}
              selected={type === displayType}
              number={
                type === "All" ? data.appsAccepted : data.typeDistribution[type]
              }
              onClick={() => setType(type)}
              options={{ maintainAspectRatio: false }}
            />
          ))}
        </Project.Category.List>
      </Project.Category.ListContainer>
      <Project.List>
        {projectsForCurrentCategory.map((project, index) => (
          <Project
            key={`${project.name}-${index}`}
            hide={index > projectsToShow - 1}
            {...project}
          />
        ))}
      </Project.List>
      {projectsToShow < projectsForCurrentCategory.length ? (
        <ViewMoreButtonContainer>
          <ViewMoreButton
            onClick={() => setProjectsToShow(projectsToShow + cardsPerPage)}
          >
            View More
          </ViewMoreButton>
        </ViewMoreButtonContainer>
      ) : null}
    </Project.Wrapper>
  )
}

export default ProjectList
