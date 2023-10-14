import React from 'react'

export default function SkillCard({ skill }) {
    return (
        <div className='skill--card'>
            <img src={skill.icon} style={{ height: "40px", width: "40px" }} alt="skill" />
            <div className='skill--info'>
                <p className='skill-name'>{skill.name}</p>
                <p className='skill-description'>This is a description</p>
            </div>
        </div>
    )
}
