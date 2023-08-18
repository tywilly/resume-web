import { Card, CardContent, Box, Avatar, Typography, Stack } from '@mui/material'
import React from 'react';

const cert = [
    {
        name: "Certified Developer - Associate",
        issuingAuth: "Amazon Web Services (AWS)",
        timeline: "Aug 2023 - Aug 2026",
        iconSrc: "img/aws-dev-cert.jpg",
        credId: "JNRQWX7C4M111KK2"
    }
];

const CertificationsListing = (props) => {
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
                            {vol.issuingAuth}
                        </Typography>
                        <Typography component="div" variant="subtitle2">
                            {vol.timeline}
                        </Typography>
                        <Typography component="div" variant="">
                            Credential ID: {vol.credId}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

const CertificationsCard = () => {

    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: '1 0' }}>
                <Stack direction={{ xs: 'column' }} spacing={{ xs: 2 }}>
                    <CertificationsListing listing={cert[0]} />
                </Stack>
            </CardContent>
        </Card>
    );
}

export default CertificationsCard;
