import styled from "styled-components"

const SectionWrapper = styled.section`
display: grid;
grid-template-columns: ${props => props.small ? "repeat(auto-fit, 160px)" : "repeat(auto-fit, 300px)"};
grid-gap: 2rem;
justify-content: space-around;
padding: 0rem 1rem 0rem 1rem;
background: ${props => props.backgroundColor}
`

export {SectionWrapper}
