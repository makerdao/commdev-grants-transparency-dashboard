import React from "react"
import styled from "styled-components"

import { FaGithub } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

import {
  SectionWrapperProjects,
  ProjectBackground,
  ProjectsWrapper,
  ProjectListSection,
  ProjectTopContainer,
  ProjectBottomContainer,
  ProjectCard,
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

import {
  ProjectTitle,
  ProjectLabel,
  ProjectLabelAudited,
  ProjectDescription,
  ProjectLinkContainer,
  ProjectLink,
  TitleLinkLearnMore,
  IcoArrow,
} from "./Basic"

const Project = ({
  hide,
  children,
  className,
  learnMoreLink,
  name,
  github,
  medium,
  twitter,
  description,
  status,
  country,
  audited,
  ...otherProps
}) => (
  <ProjectCard hide={hide} className={className}>
    {children === null || children === undefined ? (
      <>
        <ProjectTopContainer>
          {learnMoreLink ? (
            <TitleLinkLearnMore
              href={learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectTitle>
                {name} <IcoArrow>↗</IcoArrow>
              </ProjectTitle>
            </TitleLinkLearnMore>
          ) : (
            <ProjectTitle>
              {name} <IcoArrow>↗</IcoArrow>
            </ProjectTitle>
          )}
          <ProjectLinkContainer>
            {github && (
              <ProjectLink href={github}>
                <FaGithub />
              </ProjectLink>
            )}
            {medium && (
              <ProjectLink href={medium}>
                <FaMedium />
              </ProjectLink>
            )}
            {twitter && (
              <ProjectLink href={twitter}>
                <FaTwitter />
              </ProjectLink>
            )}
          </ProjectLinkContainer>
        </ProjectTopContainer>
        {description && <ProjectDescription>{description}</ProjectDescription>}
        <ProjectBottomContainer>
          <ProjectLabel>{status}</ProjectLabel>
          <ProjectLabel>{country}</ProjectLabel>
          {audited ? <ProjectLabelAudited>Audited</ProjectLabelAudited> : null}
        </ProjectBottomContainer>
      </>
    ) : (
      children
    ) //NOTE(Rejon): If you have children, you handle all the rendering yourself.
    }
  </ProjectCard>
)

//Basic
Project.Title = ProjectTitle
Project.Label = ProjectLabel
Project.Label.Audited = ProjectLabelAudited
Project.Description = ProjectDescription
Project.Link = ProjectLink
Project.Link.Container = ProjectLinkContainer
Project.Link.LearnMore = TitleLinkLearnMore
Project.Arrow = IcoArrow

//Layout
Project.Section = SectionWrapperProjects
Project.Section.Background = ProjectBackground
Project.Wrapper = ProjectsWrapper
Project.List = ProjectListSection
Project.Top = ProjectTopContainer
Project.Bottom = ProjectBottomContainer
Project.Card = ProjectCard

//Category
Project.Category = Category
Project.Category.List = ProjectCategoryList
Project.Category.ListContainer = ProjectCategoryListContainer
Project.Category.Container = CategoryContainer
Project.Category.Chart = CategoryChart
Project.Category.Number = CategoryNumber
Project.Category.Button = CategoryButton

export default Project
