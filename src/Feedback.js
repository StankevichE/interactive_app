import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="first-name" label="First name" variant="outlined" />
            <TextField id="email" label="email" variant="filled" />
            <TextField id="phone-number" label="Phone number" variant="standard" />

                <Button variant="contained" label="Send">
                    Send
                </Button>

        </Box>
    );
}
