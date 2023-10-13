import React from "react";

export function ExperienceCard({
    start,
    end,
    company,
    role,
    isActive
}) {
    return (
        <div className={isActive ? "experience--card active" : "experience--card"}>
            <p className='experience--year'>{start} - {isActive ? "Now" : end}</p>
            <div>
                <p className='experience--company'>{company}</p>
                <p className='experience--title'>{role}</p>
            </div>
        </div>
    );
}
