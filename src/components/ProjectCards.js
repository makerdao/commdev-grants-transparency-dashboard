import React from "react"
import styled from "styled-components"


const ProjectCardWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 300px);
justify-items: space-around;
grid-gap: 3rem;
justify-content: space-around;
`


const ProjectCard = styled.div`
display: flex;
width: 300px;
height: 300px;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
background: hsla(255,255,255,0.4);
`

const ProjectCardTop = styled.div`
`

const ProjectTitle = styled.h5`
color: #231536;
margin:0;
text-transform: uppercase;
`

const ProjectStatus = styled.h6`
color: #ccc;
margin-top: 1rem;
`


const ProjectDescription = styled.p`
color: #aaa;
`

const ButtonLearnMore = styled.button`
border: 1px solid #231536;
border-radius: 0.125rem;
padding: 0.875rem 1.5rem 0.875rem 1.5rem;
font-size: 1rem;
background: none;
`



export default () => (
<ProjectCardWrapper>
    <ProjectCard>
      <ProjectCardTop>
        <ProjectTitle>Argent</ProjectTitle>
        <ProjectStatus>Prototype</ProjectStatus>
      </ProjectCardTop>
        <ProjectDescription>A consumer friendly wallet with DAI integration.</ProjectDescription>
        <ButtonLearnMore>Learn More</ButtonLearnMore>
    </ProjectCard>
</ProjectCardWrapper>
);
