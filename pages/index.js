/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Psicólogos de Valor</title>
        <meta name="description" content="Você se preparou por 5 anos, fora os cursos e especializações, ama a profissão, mas não é remunerado(a) à altura do seu valor?" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <section className={styles.seção1}>
        <div className={styles.topBar}>
          <span>Atenção⚠️ Para psicólogos que querem lotar a agenda !!!</span>
        </div>

        <span className={styles.h3}>VOCÊ GOSTARIA DE CAPTAR</span>
        <span className={styles.h1}>MAIS PACIENTES PARTICULARES</span>
        <span className={styles.h3}>ATRAVÉS DA INTERNET E FINALMENTE</span>
        <span className={styles.h1}>COBRAR O VALOR QUE VOCÊ MERECE<br/>PELOS SEUS SERVIÇOS</span>
        <span className={styles.h3}>USANDO TODO O POTENCIAL DO MARKETING DIGITAL?</span>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GGLK-T1RA8g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </section>
    </main>
  )
}
