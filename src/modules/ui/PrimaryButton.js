import styled from "styled-components"

export const PrimaryButton = styled.button`
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
    transform: translateY(-10%);
  }

  :active {
    background: #b6ede7;
    border: 1px solid #b6ede7;
  }
`
