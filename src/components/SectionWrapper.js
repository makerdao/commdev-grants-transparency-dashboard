import styled from "styled-components"

const SectionWrapper = styled.section`
display: grid;
grid-template-columns: ${props => props.small ? "repeat(auto-fit, 160px)" : "repeat(auto-fit, 240px)"};
grid-gap: 2rem;
justify-content: space-around;
padding: 4rem 0rem 4rem 0rem;
`

export {SectionWrapper}
