import React from "react";


export default function ArticleCard({ }) {
    return (
        <div className='article-card'>
            <div className="article--card_header">
                <div className='article--topic'>
                    <p>Node.js</p>
                </div>
                <p>5 - min read</p>
            </div>
            <div className='article--card-image_container'>
                <img className='article--card_image' src="https://framerusercontent.com/images/4X35gkwM6GYexH2DTfZERmGnt4.jpg?scale-down-to=4096" alt="article image" />
            </div>
            <div className="article--card_info">
                <p className='article--card_info_title'>Introduction to Node.js</p>
                <p>Get acquainted with Node.js and its role in server-side JavaScript development.</p>
            </div>
        </div>
    );
}


