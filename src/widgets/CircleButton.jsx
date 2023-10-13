import { Box, useMediaQuery, IconButton } from '@mui/material'
import React from 'react'

export default function CircleButton({
    color,
    size,
    onClick,
    child
}) {

    const isMobileScreen = useMediaQuery("(max-width: 770px)");

    const sizes = {
        large: {
            height: isMobileScreen ? "40px" : "48px",
            width: isMobileScreen ? "40px" : "48px",
            borderRadius: isMobileScreen ? "20px" : "24px"
        },
        medium: {
            height: isMobileScreen ? "35px" : "40px",
            width: isMobileScreen ? "35px" : "40px",
            borderRadius: isMobileScreen ? "17.5px" : "20px"
        },
        small: {
            height: isMobileScreen ? "28px" : "30px",
            width: isMobileScreen ? "28px" : "30px",
            borderRadius: isMobileScreen ? "14px" : "15px"
        }
    };

    const dimensions = sizes[size] || sizes.medium; // Default to medium if size is invalid

    return (
        <Box
            height={dimensions.height}
            width={dimensions.width}
            borderRadius={dimensions.borderRadius}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor={color}
            sx={{
                transition: 'transform 0.3s ease-in-out',
                ':hover': {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <IconButton onClick={onClick}>
                {child}
            </IconButton>
        </Box>
    )
}