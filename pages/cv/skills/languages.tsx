import React from 'react'
import Header from '../../../components/Header'
import Grid from '../../../components/Grid'
import { LanguageSEO, LanguageCards } from '../../../data'

const CV: React.FC = () => {

    return (
        <>
            <Header title={LanguageSEO.title} description={LanguageSEO.description} />
            <Grid cards={LanguageCards} />
        </>
    )
}


export default CV