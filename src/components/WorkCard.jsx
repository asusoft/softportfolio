import React from 'react'

import { CallMade } from "@mui/icons-material";

export default function WorkCard() {
    return (
        <div className='work-card'>
            <div className='work-card-content'>
                <img className='work-image' src="https://framerusercontent.com/images/4X35gkwM6GYexH2DTfZERmGnt4.jpg?scale-down-to=4096" alt="" sizes="calc(min(438px, 100vw) - 6px)" />
                <div className='work--card-arrow'>
                    <div className="work--card_svg">
                        <CallMade sx={{ color: "#E6E1C7", fontSize: 40 }} />
                    </div>
                </div>
                <div className="work--info">
                    <h3 className="work--info_title">Friendi</h3>
                    <p className="work--info_description">Social Networking App to Connect and Chat</p>
                </div>
                <div className="work--categories">
                    <div className="work--category-button">
                        <p className="work--category-text">UI / UX</p>
                    </div>
                    <div className="work--category-button">
                        <p className="work--category-text">Front End</p>
                    </div>
                </div>
                <div className="linear-overlay"></div>
            </div>
        </div>
    )
}
