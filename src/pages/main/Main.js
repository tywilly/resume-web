import { Stack } from '@mui/material'
import * as React from 'react'
import TitleCard from './components/TitleCard'
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'
import VolunteerCard from './components/VolunteerCard'

function Main() {

    document.title = "Home - Tyler Wilcox";

    return (
        <Stack direction={{ xs: 'column' }} spacing={{ xs: 2 }}>
            <TitleCard />
            <ExperienceCard />
            <EducationCard />
            <VolunteerCard />
        </Stack>
    )
}

export default Main;