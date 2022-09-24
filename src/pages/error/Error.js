import { Typography, Stack, Box } from '@mui/material';
import * as React from 'react'

import { useRouteError } from 'react-router-dom'

function Error() {

    document.title = "Error - Tyler Wilcox";

    const error = useRouteError();
    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Stack alignItems='center' direction={{xs: 'column'}} spacing={{xs: 3}}>
                <Typography variant='h3'>
                    Oops!
                </Typography>
                <Typography>
                    Sorry, an unexpected error has occurred.
                </Typography>
                <Typography component='i'>
                    {error.statusText || error.message}
                </Typography>
            </Stack>
        </Box>
    );
}

export default Error;