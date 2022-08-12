import styled from 'styled-components'

export default function Footer() {
  return (
    <StyledFooter>
      <center>@ 2022 GKJW Probolinggo</center>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  grid-area: 3 / 1 / 4 / 2;
  margin-top: 2em;
  padding: 1em;
  border-top: 2px solid #6c757d;

  @media only screen and (min-width: 1248px) {
    grid-area: 3 / 1 / 4 / 4;
  }
`
