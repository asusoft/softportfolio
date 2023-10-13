import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material'

export default function TextButton({
    Text,
    Icon,
    color = "#171717",
    fontSize = "clamp(1rem, 1.1rem, 3.5rem)"
}) {
    return (
        <Box
            height="48px"
            padding="0 22px"
            borderRadius="6px"
            bgcolor={color}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
                transition: 'transform 0.3s ease-in-out',
                ':hover': {
                    transform: 'scale(1.1)',
                    cursor: "pointer",
                }
            }}
        >
            <Typography
                fontSize={fontSize}
                fontFamily="Rajdhani"
                color="#F5F5F5"
            >
                {Text}
            </Typography>
            {
                Icon && <Icon sx={{ color: "#F5F5F5", fontSize: 22, marginLeft: "8px" }} />
            }
        </Box>
    )
}
