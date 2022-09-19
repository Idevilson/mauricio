import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/lading.module.scss'
import {FirstSection} from "../components/firstSection";
import React from "react";
import {Header} from "../components/header";
import {SecondSection} from "../components/secondSection";
import {ThirdSection} from "../components/thirdSection";
import {FourthSection} from "../components/fourthSection";
import {Footer} from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deputada Federal Valtonia</title>
          <meta name="description" content="Página Oficial DA Deputada Federal Valtonia" />
            <link rel="icon" href="/Users/ID/Desktop/valtonia/public/favicon.ico" />
      </Head>


      <main className={styles.main}>
          <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <Footer />
      </main>


    </div>
  )
}

export default Home
