import React from 'react'
import Header from '../../components/Header'
import Grid from '../../components/Grid'
import { CVCards } from '../../data'

const CV: React.FC = () => {

    return (
        <>
            <Header title="Currículo" description="Experiências profissionais, cursos, certificados e muito mais" />
            <Grid cards={CVCards} />
        </>
    )
}


export default CV