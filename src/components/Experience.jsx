import { ExperienceCard } from './ExperienceCard';
import React from "react";
export default function Experience() {

    const Experience = [
        { id: 1, start: "2022", company: "Softsavvy", role: "Founder", isActive: true },
        { id: 2, start: "2021", end: "2022", company: "Tesla Inc", role: "Software Engineer", isActive: false },
        { id: 3, start: "2020", end: "2021", company: "Tesla Inc", role: "Software Engineer Intern", isActive: false },
        { id: 4, start: "2018", end: "2020", company: "Misturbaz", role: "React developer", isActive: false },
    ];
    return (
        <div className='experience'>
            {
                Experience.map(experience => (
                    <ExperienceCard {...experience} />
                ))
            }
        </div>
    );
}
