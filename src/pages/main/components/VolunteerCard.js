import { Card, CardContent, Box, Avatar, Typography, Stack } from '@mui/material'

import * as React from 'react'

const volunteer = [
    {
        name: 'FIRST Team 578 - Red Raider Robotics',
        timeline: 'Sep 2021 - Present',
        iconSrc: 'img/frt.jpg',
        description: 'I guide, educate and inspire high school students on robot design and development. With a primary focus in software, I also provide guidance on problem analysis, team coordination, hardware design, marketing and strategy.'
    }
]

function VolunteerListing(props) {

    const vol = props.listing;

    return (
        <Box>
            <Stack direction={{ xs: 'column' }} alignItems="start" spacing={{ xs: 1 }}>
                <Stack direction={{ xs: 'row' }} spacing={{ xs: 2 }} alignItems='center'>
                    <Avatar sx={{ width: 64, height: 64 }} variant='square' src={vol.iconSrc} />
                    <Stack>
                        <Typography component="div" variant="h4">
                            {vol.name}
                        </Typography>
                        <Typography component="div" variant="subtitle1">
                            {vol.timeline}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Box width='100%'>
                        <Typography marginLeft='5em' align='left'>
                            {vol.description}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

function VolunteerCard() {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: '1 0' }}>
                <Stack direction={{ xs: 'column' }} spacing={{ xs: 2 }}>
                    <VolunteerListing listing={volunteer[0]} />
                </Stack>
            </CardContent>
        </Card>)
}

export default VolunteerCard;
