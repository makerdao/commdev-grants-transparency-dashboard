import styled from "styled-components"

const PrimaryButton = styled.button`
padding: 0.5rem 0.875rem 0.5rem 0.875rem;
color: #231536;
font-size: 1.25rem;
border: 1px solid #ddd;
border-radius: 2px;
background: none;
transition: 0.2s ease-in-out;
outline: none;

:hover {
  cursor: pointer;
  transform:translateY(-10%);
}

:active {
  background: #B6EDE7;
  border: 1px solid #B6EDE7;
}
`

export {PrimaryButton}
