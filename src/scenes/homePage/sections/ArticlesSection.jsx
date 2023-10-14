import React from "react";
import { useMediaQuery } from "@mui/material";
import ArticleCard from '../../../components/ArticleCard';
import CardButton from "../../../widgets/CardButton";


export default function ArticlesSection() {
    const isLargeScreen = useMediaQuery("(min-width: 1022px)");
    return (
        <div id="blog" className='section' style={{
            width: "100%"
        }}>
            <h1 className='section--header'>Latest Articles</h1>
            <div className='article--cards-container'>
                <ArticleCard />
                <ArticleCard />
                {
                    isLargeScreen && <ArticleCard />
                }
            </div>
            <CardButton text="Read All Articles" />
        </div>
    );
}

