import { Container, CssBaseline, Stack} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './components/Header'
import Footer from './components/Footer'
import * as React from 'react'
import TitleCard from './components/TitleCard'
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'
import VolunteerCard from './components/VolunteerCard'

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background:{
        default: '#f3f2ef'
    }
  },
};

const theme = createTheme(themeOptions);

function Main() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='lg'>
                <Header/>
                <Stack direction={{xs: 'column'}} spacing={{ xs: 2 }}>
                    <TitleCard/>
                    <ExperienceCard/>
                    <EducationCard/>
                    <VolunteerCard/>
                </Stack>
            </Container>
            <Footer/>
        </ThemeProvider>
    )
}

export default Main;