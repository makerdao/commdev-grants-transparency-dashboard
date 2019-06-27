import styled from "styled-components"

const PrimaryButton = styled.button`
padding: 0.5rem 0.875rem 0.5rem 0.875rem;
color: #231536;
font-size: 1.25rem;
border: ${props => props.active ? '1px solid #B6EDE7' : '1px solid #ddd'};
border-radius: 2px;
background: ${props => props.active ? '#B6EDE7' : 'none'};
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
