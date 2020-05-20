import styled from "styled-components"

export const SectionWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 0rem;
  justify-content: space-around;
  padding: 2rem 0.25rem 4rem 0.25rem;
  background: ${props => props.backgroundColor};
`
