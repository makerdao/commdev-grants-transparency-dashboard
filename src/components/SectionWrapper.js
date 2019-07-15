import styled from "styled-components"

const SectionWrapper = styled.section`
position: relative;
display: grid;
grid-template-columns: ${props => props.large ? "repeat(auto-fit, minmax(300px, 1200px))" : "repeat(auto-fit, 300px)"};
grid-gap: 0rem;
justify-content: space-around;
padding: 2rem 1rem 4rem 1rem;
background: ${props => props.backgroundColor}
`

export {SectionWrapper}
