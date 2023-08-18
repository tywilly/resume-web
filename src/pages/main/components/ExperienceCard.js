import { Card, CardContent, Box, Avatar, Typography, Stack, Divider } from '@mui/material'
import { Timeline, TimelineConnector, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent } from '@mui/lab'

import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import * as React from 'react'


const experiences = [
    {
        companyName: "Envative - Smarter Software Solutions",
        iconSrc: 'img/1567702414518.jpg',
        location: 'Rochester, NY',
        positions: [
            {
                title: "Full Stack Engineer",
                description: [

                ],
                timerange: {
                    start: "April 2023",
                    end: "Present"
                }
            }
        ]
    },
    {
        companyName: 'NetApp Inc.',
        iconSrc: 'img/1599748887845.jpg',
        location: 'Rochester, NY',
        positions: [
            {
                title: "Software Engineer II",
                description: [
                    "Full-Stack developer building a scalable WebApp leveraging serverless cloud technologies at its core.",
                    "Primary focus in backend development utilizing C# .NET and a Microservice architecture. Also focused on AWS Lambdas in Python, DynamoDB and StepFunctions.",
                    "Familiarity with React.JS and JavaScript building components using ANT design and Storybook.",
                    "Assisted with on-boarding and mentoring two team members on technologies and business logic."
                ],
                timerange: {
                    start: "Nov 2021",
                    end: "April 2023"
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
                title: "Software Engineer",
                description: [
                    "Began as intern on research and development team, transitioned to full time in December 2020.",
                    "Worked in a fast paced, agile team environment building a next generation data ingestion pipeline leveraging cloud technologies.",
                    "Designed, implemented, and maintained features that help customers understand their cloud expenditures."
                ],
                timerange: {
                    start: "Jan 2021",
                    end: "Nov 2021"
                }
            },
            {
                title: "Software Engineer Intern",
                description: [],
                timerange: {
                    start: "May 2020",
                    end: "Dec 2020"
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
                description: ["Quality Assurance developer building robust test suites for a large data ingestion system."],
                timerange: {
                    start: "May 2018",
                    end: "Dec 2018"
                }
            }
        ]
    }
]


function ExperienceListing(props) {
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
                                    <Typography><ul>{position.description.map((x) => (<li>{x}</li>))}</ul></Typography>
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
