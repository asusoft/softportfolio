import { useMediaQuery } from '@mui/material'
import React from 'react'
import TextButton from '../../../widgets/TextButton';
import avatar from "../../../assets/avatar.png"

export default function HeroSection() {
    const isMobileScreen = useMediaQuery("(max-width: 1020px)");
    return (
        <section id='hero' className='section'>
            <div className='hero'>
                <div className='hero--left'>
                    <p className='hero--title'>Hi! I am</p>
                    <p className='hero--title'>Abubakar Shehu.</p>
                    <div className='hero--description'>
                        <p class="hero--description_text">I'm a Software Engineer, crafting innovative and scalable software solutions that drive technological advancements for companies worldwide.</p>
                    </div>
                    <div style={{ display: 'flex', marginTop: "2.5rem", gap: "1.2rem", }}>
                        <TextButton Text="Hire me" fontSize="1rem" color="#9B3B12" />
                        <TextButton Text="Browse Works" fontSize="1rem" />
                    </div>
                </div>
                {
                    !isMobileScreen && (
                        <div className='hero--right'>
                            <div className='hero--avatar_container'>
                                <img src={avatar} className='avatar' alt="avatar" />
                            </div>
                            <div className="hero--quote">
                                <h4>"Code with purpose, engineer with passion, and create the future you envision."</h4>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
