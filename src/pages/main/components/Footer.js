import { Box, Container, Typography, Link } from '@mui/material'
import { Favorite } from '@mui/icons-material';
import * as React from 'react'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            Tyler Wilcox{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.default', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Made with <Favorite color='error' fontSize='small'/> using{' '}
                    <Link color="inherit" href="https://mui.com/">
                        MUI
                    </Link>{' '}
                    and{' '}
                    <Link color="inherit" href="https://reactjs.org/">
                        React
                    </Link>{' '}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    )
}

export default Footer;