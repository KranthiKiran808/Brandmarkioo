import styled from 'styled-components'

export const CustomHeading = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: ${props => (props.outline ? 500 : '')};
  font-family: 'Roboto';
  `