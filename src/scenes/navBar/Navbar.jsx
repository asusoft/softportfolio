import {
    Box,
    IconButton,
    useMediaQuery,
} from '@mui/material'
import React from 'react'
import { Menu, Close, Home, Telegram } from "@mui/icons-material";

import FlexBetween from '../../components/FlexBetween';
import NavText from '../../widgets/NavText';
import CircleButton from '../../widgets/CircleButton';
import TextButton from '../../widgets/TextButton';
import SocialLinks from '../../components/SocialLinks';
import NavLinks from '../../components/NavLinks';

import { scrollToSection } from '../../functions';

import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const isMobileScreen = useMediaQuery("(max-width: 1024px)");
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const navigate = useNavigate()

    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        const isOpen = isMenuOpen;

        if (isOpen) {
            navbar.style.height = isMobileScreen ? "70px" : "80px";
        } else {
            navbar.style.height = '450px';
        }
        setIsMenuOpen(prevState => !prevState)
    }

    const IconComponent = isMenuOpen ? Close : Menu;

    return (
        <div
            className='container'
        >
            <Box
                className="navbar"
            >
                <Box width="100%">
                    <FlexBetween gap="1.5rem">
                        <FlexBetween gap="1.5rem">
                            <CircleButton
                                size="large"
                                color="#171717"
                                onClick={() => {
                                    if (isMenuOpen) {
                                        toggleMenu()
                                    }
                                    scrollToSection("hero")
                                }
                                }
                                child={
                                    <Home sx={{ color: "#F5F5F5", fontSize: 30 }} />
                                }
                            />
                            {
                                !isMobileScreen && (
                                    <FlexBetween gap="1.5rem" marginLeft="20px">
                                        <NavLinks />
                                    </FlexBetween>
                                )
                            }
                        </FlexBetween>
                        {
                            isMobileScreen ? (
                                <IconButton
                                    style={{ marginLeft: "1rem", marginRight: "-0.5rem" }}
                                    onClick={toggleMenu}
                                >
                                    <IconComponent
                                        sx={{ color: "#5A5A5A", fontSize: 32 }}
                                    />
                                </IconButton>
                            ) : (
                                <FlexBetween gap="2.5rem">
                                    <FlexBetween gap="0.5rem">
                                        <SocialLinks />
                                    </FlexBetween>
                                    <TextButton Text="Let's Chat" Icon={Telegram} />
                                </FlexBetween>
                            )
                        }

                    </FlexBetween>
                    {
                        isMenuOpen && (
                            <Box
                                marginTop="1.5rem"
                            >
                                <FlexBetween
                                    className='flex-column'
                                    flexDirection="column"
                                    gap="2rem"
                                >
                                    <NavLinks toggleMenu={toggleMenu} />
                                </FlexBetween>
                                <FlexBetween
                                    marginTop="1.5rem"
                                    className='flex-column'
                                    flexDirection="column"
                                    gap="3rem"
                                >
                                    <FlexBetween
                                        className='flex-column'
                                        gap="0.5rem"
                                    >
                                        <SocialLinks />
                                    </FlexBetween>
                                    <TextButton Text="Let's Chat" Icon={Telegram} />
                                </FlexBetween>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </div>
    )
}