import { useMediaQuery } from '@mui/material';
import React from 'react'
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import WorksSection from './sections/WorksSection';
import ArticlesSection from './sections/ArticlesSection';


export default function HomePage() {
    const isMobileScreen = useMediaQuery("(max-width: 1024px)");

    return (
        <div className='home'>
            <HeroSection />
            <WorksSection />
            <AboutSection />
            <ArticlesSection />
        </div>
    )
}
