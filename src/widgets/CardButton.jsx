
import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material'


export default function CardButton({ text }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            marginTop: "4rem"
        }}>
            <Box
                className="card--button"
            >
                <Typography fontSize="20px" fontFamily="Rajdhani">
                    {text}
                </Typography>
            </Box>
        </div>
    );
}