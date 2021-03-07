import React from 'react'
import Header from '../../components/Header'
import Grid from '../../components/Grid'
import { ExperienceSEO, ExperienceCards } from '../../data'

const CV: React.FC = () => {

    return (
        <>
            <Header title={ExperienceSEO.title} description={ExperienceSEO.description} />
            <Grid cards={ExperienceCards} />
        </>
    )
}


export default CV