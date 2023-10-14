import React from "react";
import icons from "../assets/constants/icons";
import SkillCard from "./SkillCard";

export default function Skills() {
    const skills = [
        { id: 1, name: "Software Development", icon: icons.web },
        { id: 2, name: "OOP", icon: icons.oop },
        { id: 3, name: "Database Design", icon: icons.database },
        { id: 4, name: "React", icon: icons.react },
        { id: 5, name: "Version Control", icon: icons.git },
        { id: 6, name: "Node Js", icon: icons.node },
        { id: 7, name: "React Native", icon: icons.react },
        { id: 8, name: "Django", icon: icons.django },
    ];
    return (
        <div className="skills-container">
            <div className="skill--card-row skill--card-row-1">
                {skills.concat(skills).map((skill, index) => (
                    <SkillCard
                        skill={skill}
                    />
                ))}
            </div>
            <div className="skill--card-row skill--card-row-2">
                {skills.concat(skills).map((skill, index) => (
                    <SkillCard
                        skill={skill}
                    />
                ))}
            </div>
        </div>
    )
}




