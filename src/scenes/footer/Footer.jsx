
import React from 'react'
import { Typography } from '@mui/material'
import { Home } from "@mui/icons-material";
import FlexBetween from '../../components/FlexBetween';
import CircleButton from '../../widgets/CircleButton';
import SocialLinks from '../../components/SocialLinks';
import NavLinks from '../../components/NavLinks';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../functions';


export default function Footer() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate()

    return (
        <div className='footer'>
            <FlexBetween gap="3rem" flexDirection="column">
                <CircleButton
                    size="large"
                    color="#171717"
                    onClick={() => scrollToSection("hero")}
                    child={
                        <Home sx={{ color: "#F5F5F5", fontSize: 30 }} />
                    }
                />
                <FlexBetween gap="5rem">
                    <NavLinks />
                </FlexBetween>
                <FlexBetween gap="3rem">
                    <SocialLinks />
                </FlexBetween>
                <Typography
                    fontSize="clamp(1rem, 1.3rem, 3.5rem)"
                    fontFamily="Rajdhani"
                    color="#171717"
                >© {currentYear} Asusoft</Typography>
            </FlexBetween>
        </div>
    )
}
