import React from 'react'
import Skills from './Skills'
import Experience from './Experience';
import { useMediaQuery } from '@mui/material';
import CardButton from '../widgets/CardButton';

import avatar from "../assets/images/avatar.png"

export default function AboutSection() {
    const isMobileScreen = useMediaQuery("(max-width: 1022px)");
    return (
        <div
            id='about'
            className='section'
            style={{
                width: "100%"
            }}>
            <h1 className='section--header'>About Me</h1>
            <div className='about'>
                <div className='about--side'>
                    <p className='about--title'>My awesome</p>
                    <p className='about--title'>Skills...</p>
                    <div className='about--description'>
                        <p class="about--description_text">I'm a Software Engineer, crafting innovative and scalable software solutions that drive technological advancements for companies worldwide.</p>
                    </div>
                    <p className='about--subtitle'>Main Skills</p>
                    <Skills />
                </div>
                <div className='about--side'>
                    <p className='about--subtitle'>Experience</p>
                    <Experience />
                    {
                        !isMobileScreen && (
                            <div className='about--avatar_container'>
                                <img src={avatar} className='avatar' alt="avatar" style={{ transform: "rotateY(180deg)" }} />
                            </div>
                        )
                    }
                </div>
            </div>
            <CardButton text="Know More About Me" />
        </div>);
}