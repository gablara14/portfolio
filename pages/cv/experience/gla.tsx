import React from 'react'
import Header from '../../../components/Header'
import Grid from '../../../components/Grid'
import { GLASEO, GLACards } from '../../../data'

const CV: React.FC = () => {

    return (
        <>
            <Header title={GLASEO.title} description={GLASEO.description} />
            <Grid cards={GLACards} />
        </>
    )
}


export default CV