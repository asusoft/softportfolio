import Skill from "../widgets/Skill";
import React from "react";
import icons from "../assets/constants/icons";

export default function Skills() {
    const skills = [
        { id: 1, name: "Software Development", icon: icons.web },
        { id: 2, name: "OOP", icon: icons.oop },
        { id: 3, name: "Database Design", icon: icons.database },
        { id: 4, name: "React", icon: icons.react },
        { id: 5, name: "Version Control", icon: icons.git },
        { id: 6, name: "Node Js", icon: icons.node },
        { id: 6, name: "React Native", icon: icons.react },
        { id: 6, name: "Django", icon: icons.django },
    ];
    return (
        <div class="skills">
            {
                skills.map(skill =>
                    <Skill
                        skill={skill}
                    />
                )
            }
        </div>
    )
}
