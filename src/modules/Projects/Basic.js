import styled from "styled-components"

import { device } from "@src/mediaqueries/device"

export const ProjectTitle = styled.h2`
  color: var(--headline-color);
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.15s ease-in-out;

  :hover {
    color: var(--highlight-color--makerteal);
  }

  span {
    color: var(--highlight-color--makerteal);
  }

  @media ${device.mobileL} {
    max-width: 180px;
  }
`

export const ProjectLabel = styled.span`
  font-size: 1rem;
  margin: 0 1rem;
  color: var(--body-color);
  text-transform: uppercase;
  text-align: left;

  :nth-child(1) {
    margin-left: 0rem;
  }

  @media ${device.mobileL} {
    margin: 0.5rem;
  }
`

export const ProjectLabelAudited = styled(ProjectLabel)`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  background: linear-gradient(hsla(168, 50%, 90%, 1), hsla(168, 50%, 86%, 1));
  color: var(--highlight-color--makerteal);
  border-radius: 4px;
`

export const ProjectDescription = styled.p`
  color: var(--body-color);
  width: 100%;

  max-height: 140px;
  overflow: auto;
  padding: 1rem 1rem 1rem 0rem;
  transition: 0.1s ease-in-out;

  :hover {
    /* Enable this and overflowing project descriptions will be revealed on hover */
    /* white-space: pre-wrap; */
  }

  @media ${device.tablet} {
    white-space: normal;
  }
`

export const ProjectLinkContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.25rem;
  margin: 0rem 0.475rem;

  > svg {
    color: #aaa;
    transition: 0.2s ease-in-out;
  }

  > svg:hover {
    color: #1aab9b;
  }
`

export const TitleLinkLearnMore = styled.a`
  align-self: center;
  background: none;
  text-decoration: none;
  transition: 0.15s ease-in-out;

  :hover {
    color: var(--highlight-color--makerteal);

    IcoArrow {
      transform: translate(4px);
    }
  }
`

export const IcoArrow = styled.span`
  display: inline-block;
  transition: 0.15s ease-in-out;
  color: var(--highlight-color--makerteal);
`
