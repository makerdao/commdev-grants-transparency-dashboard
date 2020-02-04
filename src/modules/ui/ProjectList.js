import React from "react"
import { Component } from "react"
import styled from "styled-components"

import SectionTitle from "@modules/ui/SectionTitle.js"
import { PrimaryButton } from "@modules/ui/PrimaryButton.js"
import ProjectListRows from "@modules/ui/ProjectListRows.js"

import { data, pieData } from "@src/utils.js"
import { pType } from "@static/data/dataformat.js"

import Project from "@modules/Projects"

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

//categoryPieData(type)}
export class ProjectList extends Component {
  constructor(props) {
    super(props)
    this.cardsPerPage = 10
    this.state = {
      displayType: "All",
      projectsToShow: this.cardsPerPage,
      projectsForSelectedCategory: data.acceptedProjects,
    }
  }

  setType = type => {
    let desiredType = type
    let nextProjectsForSelectedCategory =
      desiredType === "All"
        ? data.acceptedProjects
        : data.acceptedProjects.filter(p => p.type === desiredType)
    this.setState({
      displayType: desiredType,
      projectsToShow: this.cardsPerPage,
      projectsForSelectedCategory: nextProjectsForSelectedCategory,
    })
  }

  seeMore(e) {
    this.setState({
      projectsToShow: this.state.projectsToShow + this.cardsPerPage,
    })
  }

  render() {
    let categories = ["All"]
    categories = categories.concat(Object.values(pType))

    return (
      <Project.Container large name="Projects">
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
                selected={type === this.state.displayType}
                number={
                  type === "All"
                    ? data.appsAccepted
                    : data.typeDistribution[type]
                }
                onClick={() => setType(type)}
              />
            ))}
          </Project.Category.List>
        </Project.Category.ListContainer>
      </Project.Container>

      // <React.Fragment>
      //   <SectionWrapperProjects large name="Projects">
      //     <ProjectBackground />
      //     <SectionTitle
      //       colorMakerTeal="true"
      //       title="Explore our supported projects"
      //     ></SectionTitle>
      //     <ProjectCategoryListWrapper>
      //       <ProjectCategoryList>
      //         {categories.map(type => (
      //           <ProjectCategoryContainer key={type.toString()}>
      //             {type === this.state.displayType ? (
      //               // in order for the animation to be seen upon selecting a filter, this object has to be drawn anew
      //               <ProjectCategoryChart selected={true}>
      //                 <Pie
      //                   data={pieData("type", type)}
      //                   options={{ maintainAspectRatio: false }}
      //                 />
      //               </ProjectCategoryChart>
      //             ) : (
      //               <ProjectCategoryChart
      //                 selected={false}
      //               ></ProjectCategoryChart>
      //             )}
      //             <ProjectCategoryNumber>
      //               {type === "All"
      //                 ? data.appsAccepted
      //                 : data.typeDistribution[type]}
      //             </ProjectCategoryNumber>
      //             <ProjectCategoryButton
      //               onClick={this.setType.bind(this)}
      //               id={type}
      //               active={type === this.state.displayType}
      //             >
      //               {" "}
      //               {type}{" "}
      //             </ProjectCategoryButton>
      //           </ProjectCategoryContainer>
      //         ))}
      //       </ProjectCategoryList>
      //     </ProjectCategoryListWrapper>
      //     <ProjectListRows
      //       selectedProjects={this.state.projectsForSelectedCategory}
      //       displayType={this.state.displayType}
      //       projectsToShow={this.state.projectsToShow}
      //     ></ProjectListRows>
      //     {this.state.projectsToShow <
      //     this.state.projectsForSelectedCategory.length ? (
      //       <ViewMoreButtonContainer>
      //         <ViewMoreButton onClick={this.seeMore.bind(this)}>
      //           View More
      //         </ViewMoreButton>
      //       </ViewMoreButtonContainer>
      //     ) : null}
      //   </SectionWrapperProjects>
      // </React.Fragment>
    )
  }
}
