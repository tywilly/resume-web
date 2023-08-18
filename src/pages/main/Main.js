import { Stack } from '@mui/material'
import * as React from 'react'
import TitleCard from './components/TitleCard'
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'
import VolunteerCard from './components/VolunteerCard'
import CertificationsCard from './components/CertificationsCard'

function Main() {

    document.title = "Home - Tyler Wilcox";

    return (
        <Stack direction={{ xs: 'column' }} spacing={{ xs: 2 }}>
            <TitleCard />
            <ExperienceCard />
            <EducationCard />
            <CertificationsCard />
            <VolunteerCard />
        </Stack>
    )
}

export default Main;
