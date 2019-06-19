import React from "react"
import styled from "styled-components"


const ProjectCategoriesWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 160px);
grid-gap: 2rem;
justify-content: space-around;
padding: 4rem 0rem 4rem 0rem;
`


const ProjectCategoryContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: hsla(255,255,255,0.4);
`

const ProjectCategoryChart = styled.div`
width: 48px;
height: 48px;
border-radius: 100px;
background-color: #1AAB9B;
`

const ProjectCategoryNumber = styled.h6`
color: #231536;
margin:1rem;
text-transform: uppercase;
`

const ProjectCategoryLabel = styled.h6`
color: #aaa;
margin:0;
text-transform: uppercase;
`



export default () => (
  <ProjectCategoriesWrapper>
      <ProjectCategoryContainer>
        <ProjectCategoryChart />
        <ProjectCategoryNumber>
        25%
        </ProjectCategoryNumber>
        <ProjectCategoryLabel>
          DEFI
        </ProjectCategoryLabel>
      </ProjectCategoryContainer>
      <ProjectCategoryContainer>
        <ProjectCategoryChart />
        <ProjectCategoryNumber>
        12%
        </ProjectCategoryNumber>
        <ProjectCategoryLabel>
          Governance
        </ProjectCategoryLabel>
      </ProjectCategoryContainer>
  <ProjectCategoryContainer>
    <ProjectCategoryChart />
    <ProjectCategoryNumber>
    18%
    </ProjectCategoryNumber>
    <ProjectCategoryLabel>
      Fiat Ramps
    </ProjectCategoryLabel>
  </ProjectCategoryContainer>
  <ProjectCategoryContainer>
    <ProjectCategoryChart />
    <ProjectCategoryNumber>
    4%
    </ProjectCategoryNumber>
    <ProjectCategoryLabel>
      Payroll
    </ProjectCategoryLabel>
  </ProjectCategoryContainer>
  <ProjectCategoryContainer>
    <ProjectCategoryChart />
    <ProjectCategoryNumber>
    10%
    </ProjectCategoryNumber>
    <ProjectCategoryLabel>
      CDP MGMT
    </ProjectCategoryLabel>
  </ProjectCategoryContainer>
  <ProjectCategoryContainer>
    <ProjectCategoryChart />
    <ProjectCategoryNumber>
    20%
    </ProjectCategoryNumber>
    <ProjectCategoryLabel>
      Enterprise
    </ProjectCategoryLabel>
  </ProjectCategoryContainer>
  <ProjectCategoryContainer>
    <ProjectCategoryChart />
    <ProjectCategoryNumber>
    9%
    </ProjectCategoryNumber>
    <ProjectCategoryLabel>
      Analytics
    </ProjectCategoryLabel>
  </ProjectCategoryContainer>
  </ProjectCategoriesWrapper>

);
