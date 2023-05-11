import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle
} from 'styled-components'
import { light, dark } from './constants.js'

export default function ComponenteEstilizado() {
  const mainColor = '#db7093'
  const mainAlphaColor80 = '#db709380'

  const setTransitionTime = (time) => `all ${time} ease-in`

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    
    100% {
      opacity: 1;
     }
  `

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    /* color: ${({ color }) => color}; */
    color: ${({ color }) => color || '#000'};
    background-color: ${mainColor};
    transition: ${setTransitionTime('.5s')};
    animation: ${fadeIn} 5s ease-out;

    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: : 20%;
        border-radius: 1.50rem;
        cursor: pointer;
    `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `

  // Lo ideal es que este en index.js en el proncipal
  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      color: #61dafb;
      text-transform: uppercase;
    }
    `

  return (
    <>
      <GlobalStyle />
      <h2>Styled Components</h2>
      <MyH3>Hi, I am a H3 styled with styled-components</MyH3>
      <MyH3 color="#fff">Hi, I am a H3 styled with styled-components</MyH3>
      <MyH3 color="#61dafb">Hi, I am a H3 styled with styled-components</MyH3>
      <MyH3 isButton>I am H3 styled as a button</MyH3>
      <br />
      <p>Using styled-components: ThemeProvider in the boxes</p>
      <ThemeProvider theme={light}>
        <Box>A light Box</Box>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>A dark Box</Box>
      </ThemeProvider>
      <br />
      <p>Using inherit with styled-components</p>
      <ThemeProvider theme={light}>
        <Box>A light Box</Box>
        <BoxRounded>A light Box with inherit</BoxRounded>
      </ThemeProvider>
      <hr />
    </>
  )
}
