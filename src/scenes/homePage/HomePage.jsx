import { useMediaQuery } from '@mui/material';
import React from 'react'
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import WorksSection from './../../components/WorksSection';


export default function HomePage() {
    const isMobileScreen = useMediaQuery("(max-width: 1024px)");

    return (
        <div className='home'>
            <HeroSection />
            <WorksSection />
            <AboutSection />
        </div>
    )
}
