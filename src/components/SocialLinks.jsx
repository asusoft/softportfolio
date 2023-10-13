import React from 'react'
import CircleButton from '../widgets/CircleButton';
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material";

export default function SocialLinks() {
    const socialButtons = [
        { id: 1, platform: "Twitter", Icon: Twitter, link: "https://x.com/asusoft_" },
        { id: 2, platform: "GitHub", Icon: GitHub, link: "https://github.com/asusoft" },
        { id: 3, platform: "LinkedIn", Icon: LinkedIn, link: "https://www.linkedin.com/in/abubakar-shehu-umar-0a1882220" },
    ];
    return (
        socialButtons.map((social) => (
            <CircleButton
                key={social.id}
                size="medium"
                color="#D4D4D4"
                onClick={() => window.open(social.link, '_blank')}
                child={
                    <social.Icon sx={{ color: "#5A5A5A", fontSize: 22 }} />
                }
            />
        ))
    )
}
