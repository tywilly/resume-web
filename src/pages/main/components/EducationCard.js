import { Card, CardContent, Box, Avatar, Typography, Stack} from '@mui/material'

import * as React from 'react'

const edus = [
    {
        name: 'Rochester Institute of Technology',
        degree: "Bachelor's in Computer Science",
        graduationYear: 'Aug 2015 - May 2020',
        iconSrc: 'img/1551472609697.jpg',
    }
]

function EducationListing(props) {

    const edu = props.listing;

    return (
        <Box>
            <Stack direction={{ xs: 'column' }} alignItems="start" spacing={{ xs: 1 }}>
                <Stack direction={{ xs: 'row' }} spacing={{ xs: 2 }} alignItems='center'>
                    <Avatar sx={{ width: 64, height: 64 }} variant='square' src={edu.iconSrc} />
                    <Stack>
                        <Typography component="div" variant="h4">
                            {edu.name}
                        </Typography>
                        <Typography component="div" variant="subtitle1">
                            {edu.degree}
                        </Typography>
                        <Typography component="div" variant="subtitle2">
                            {edu.graduationYear}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack>

                </Stack>
            </Stack>
        </Box>
    )
}

function EducationCard() {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: '1 0' }}>
                <Stack direction={{ xs: 'column' }} spacing={{ xs: 2 }}>
                    <EducationListing listing={edus[0]} />
                </Stack>
            </CardContent>
        </Card>)
}

export default EducationCard;