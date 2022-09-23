import { Card, CardContent, Box, Avatar, Typography, Stack, Divider } from '@mui/material'
import { Timeline, TimelineConnector, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent } from '@mui/lab'

import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import * as React from 'react'


const experiences = [
    {
        companyName: 'NetApp Inc.',
        iconSrc: 'img/1599748887845.jpg',
        location: 'Rochester, NY',
        positions: [
            {
                title: "Software Engineer II",
                description: "Full-Stack developer building a scalable WebApp leveraging serverless cloud technologies at its core.",
                timerange: {
                    start: "Nov 2021",
                    end: "Present"
                }
            }
        ]
    },
    {
        companyName: 'CloudCheckr',
        iconSrc: 'img/1618582794915.jpg',
        location: 'Rochester, NY',
        note: 'Acquired by NetApp Inc. in Nov of 2021',
        positions: [
            {
                title: "Software Engineer Intern",
                description: "",
                timerange: {
                    start: "May 2020",
                    end: "Dec 2020"
                }
            },
            {
                title: "Software Engineer",
                description: "",
                timerange: {
                    start: "Jan 2021",
                    end: "Nov 2021"
                }
            }
        ]
    },
    {
        companyName: 'Thomson Reuters',
        iconSrc: 'img/1656655511771.jpg',
        location: 'Rochester, NY',
        positions: [
            {
                title: "Software Test Engineer Intern",
                description: "Quality Assurance developer building robust test suites for a large data ingestion system.",
                timerange: {
                    start: "May 2018",
                    end: "Dec 2018"
                }
            }
        ]
    }
]


function ExperienceListing(props) {
    console.log(props)
    const listing = props.listing;

    return (
        <Box>
            <Stack direction={{ xs: 'column' }} alignItems="" spacing={{ xs: 0 }}>
                <Stack direction={{ xs: 'row' }} spacing={{ xs: 2 }} alignItems='center'>
                    <Avatar sx={{ width: 64, height: 64 }} variant='square' src={listing.iconSrc} />
                    <Stack>
                        <Typography component="div" variant="h4">
                            {listing.companyName}
                        </Typography>
                        <Typography component="div" variant="subtitle1">
                            {listing.location}
                        </Typography>
                        {listing.note ? <Typography component="div" variant="subtitle2">
                            {listing.note}
                        </Typography> : <></>}
                    </Stack>
                </Stack>
                <Stack>
                    <Timeline position='right' sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.1,
                        },
                    }}>

                        {listing.positions.map((position, index, array) => (
                            <TimelineItem>
                                <TimelineOppositeContent
                                    align="right"
                                    variant="body2"
                                    color="text.secondary">
                                    {position.timerange.start} - {position.timerange.end}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    {index !== 0 ? <TimelineConnector /> : <></>}
                                    <TimelineDot />
                                    {index !== array.length ? <TimelineConnector /> : <></>}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='h6' component='span'>
                                        {position.title}
                                    </Typography>
                                    <Typography>{position.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Stack>
            </Stack>
        </Box>
    )
}

function ExperienceCard() {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: '1 0' }}>
                <Stack direction={{ xs: 'column' }} spacing={{ xs: 2 }}>
                    <ExperienceListing listing={experiences[0]} />
                    <Divider />
                    <ExperienceListing listing={experiences[1]}/>
                    <Divider />
                    <ExperienceListing listing={experiences[2]}/>
                </Stack>
            </CardContent>
        </Card>)
}

export default ExperienceCard;