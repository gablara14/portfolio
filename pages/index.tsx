import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'


type ProvisoryData = {
  title: string,
  description: string
}

const PROVISORY_DATA: ProvisoryData = {
  title: "Gabriel Lara",
  description: "JavaScript/Typescript Full-Stack Developer",
}

const Home: React.FC = () => {
  const {title,description} = PROVISORY_DATA
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}  />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <main className={styles.main}>
        <img
        src="https://avatars.githubusercontent.com/u/69282928?s=460&u=b09b941c7904e8f28151dd737c4cb2ba8f4d1087&v=4"
        className={styles.myimage}
        />
        <h1 className={styles.title}>
          {title}
        </h1>

        <p className={styles.description}>
          <code className={styles.code}> {description}</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/gablara14" className={styles.card}>
            <h3>Github</h3>
            <p>Veja as minhas colaborações no Github</p>
          </a>

          <a href="https://www.linkedin.com/in/gabriel-lara-412b1613a" className={styles.card}>
            <h3>Linkedin</h3>
            <p>Veja meu perfil profissional no Linkedin</p>
          </a>

          <a
            href="https://medium.com/@gabrielrlara"
            className={styles.card}
          >
            <h3>Medium</h3>
            <p>Veja as minhas publicações sobre AI e Machine Learning no Medium</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


export default Home