import { Container, CssBaseline, Stack} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './components/Header'
import Footer from './components/Footer'
import * as React from 'react'
import TitleCard from './components/TitleCard'
import ExperienceCard from './components/ExperienceCard'


const theme = createTheme();

function Main() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='lg'>
                <Header/>
                <Stack direction={{xs: 'column'}} spacing={{ xs: 2 }}>
                    <TitleCard/>
                    <ExperienceCard/>
                </Stack>
            </Container>
            <Footer/>
        </ThemeProvider>
    )
}

export default Main;