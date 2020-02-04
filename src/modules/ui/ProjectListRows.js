import React from "react"
import styled from "styled-components"

import { Project } from "@modules/Projects"

// const ProjectRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   padding: 1rem 0rem 0.5rem 0rem;

//   @media ${device.mobileL} {
//     padding: 1rem 0rem 1rem 0rem;
//   }
// `

// //TODO(Rejon): Try to get rid of this if possible.
// const ProjectBottomContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   justify-content: space-between;
//   width: 100%;
//   padding: 1rem 0rem 0.5rem 0rem;
//   align-items: center;

//   @media ${device.tablet} {
//     flex-wrap: wrap;
//   }

//   @media ${device.mobileL} {
//     padding: 1rem 0rem 1rem 0rem;
//   }
// `

export default ({ selectedProjects, projectsToShow }) => {
  return (
    <Project.List>
      {selectedProjects.map((project, index) => (
        <Project
          key={`${project.name}-${index}`}
          hide={index > projectsToShow - 1}
          {...project}
        />
      ))}
    </Project.List>
  )
}
