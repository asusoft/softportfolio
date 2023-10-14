import React from "react";

import WorkCard from '../../../components/WorkCard';
import CardButton from '../../../widgets/CardButton';

export default function WorksSection({ }) {
    return (
        <div id="works" className='section' style={{
            width: "100%"
        }}>
            <h1 className='section--header'>Check my latest Works</h1>
            <div className='work--cards-container'>
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </div>
            <CardButton text="See All" />
        </div>
    );
}
