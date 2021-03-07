import React from 'react'
import Header from '../../components/Header'
import Grid from '../../components/Grid'
import { CertificatesCards } from '../../data'

const CV: React.FC = () => {

    return (
        <>
            <Header title="Certificados" description="" />
            <Grid cards={CertificatesCards} />
        </>
    )
}


export default CV