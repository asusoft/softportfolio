import React from "react";
import CircleButton from "./CircleButton";


export default function Skill({ skill }) {
    return (
        <div className='skill-widget'>
            <CircleButton
                size="large"
                color="#D4D4D4"
                child={
                    <img src={skill.icon} style={{ height: "30px", width: "30px" }} alt="skill" />

                }
            />
            <p className='skill-name'>{skill.name}</p>
        </div>
    );
}
