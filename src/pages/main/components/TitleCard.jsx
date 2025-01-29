import { Card, CardContent, Avatar, Typography, Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import { Box} from '@mui/system';

import * as React from 'react'

function TitleCard() {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: '1 0' }}>
                <Stack direction={{xs: 'column'}} spacing={{xs: 4}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Stack direction={{ xs: 'row' }} spacing={{ xs: 1, sm: 4 }} alignItems="center">
                            <Avatar sx={{ width: 128, height: 128 }} src='img/5A1F0936-7EC2-4660-9D58-79B11EF5BB48.jpeg' />
                            <Typography component="div" variant="h2">
                                Tyler Wilcox
                            </Typography>
                        </Stack>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0, sm: 4 }}>
                            <Typography><LocationOnIcon /> Rochester, NY</Typography>
                            <Typography><WorkIcon /> L3Harris Technologies</Typography>
                            <Typography><SchoolIcon /> Rochester Institute of Technology</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>)
}

export default TitleCard;
