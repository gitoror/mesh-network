import Head from "next/head";
import Main from "@/components/main.js";
import Image from "next/image";
import styles from "@/styles/projet.module.css";

export default function Projet() {
  return (
    <>
      <Head>
        <title>Projet</title>
      </Head>
      <Main>
        <h2>Objectifs</h2>
        <br></br>
        <p>
          Le but ultime du projet est d'être en mesure de déployer un réseau
          Mesh relié à internet par l'intermédiaire d'une antenne Starlink.{" "}
          <br></br>Cet objectif est très intéressant car il permet alors
          d'établir des communcations dans des endroits sur Terre non couverts
          et également de servir de réseau de secours en cas de panne du réseau
          principal.{" "}
        </p>
        <br></br>
        <div className={styles.star_container}>
          <div className={styles.star}>
            <Image
              src="/starlink-antenne.jpeg"
              fill
              objectFit="contain"
              quality="100"
            />
          </div>
          <p>
            Antenne Starlink (
            <a href="https://www.starlink.com/technology">site</a>)
          </p>
        </div>
        <br></br>
        <h2>Test de performance de l'antenne du Techlab (nPerf)</h2>
        <br></br>
        <div className={styles.nperf}>
          <Image src="/nperf.PNG" fill objectFit="contain" quality="100" />
        </div>
        <br></br>
        <h2>Réseau Mesh Wifi Asus</h2>
        <br></br>
        <p>
          Le techlab dispose de quelques relais Asus fonctionnant en mode Mesh.
          Le paramétrage se fait simplement via l'interface Asus. Plusieurs
          noeuds (ou relais) ont été répartis dans le Techlab
        </p>
        <br></br>
        <div className={styles.asus_container}>
          <div className={styles.asus}>
            <Image src="/asusmesh.PNG" fill objectFit="contain" quality="100" />
          </div>

          <div className={styles.asus}>
            <Image src="/relai.png" fill objectFit="contain" quality="100" />
          </div>
        </div>
        <br></br>
        <h2>Réseau Mesh avec des microcontroleurs RaspberryPi</h2>
        <br></br>
        <p>
          Pour cette partie un étudiant spécialisé dans les réseaux nous a
          apporté son aide. En sollicitant le chercheur Emmanuel Nataf il s'est
          approprié le processus d'installation des noeuds d'un réseau sur des
          microcontroleurs RaspberryPi.{" "}
        </p>
        <br></br>
        <div className={styles.rasp_container}>
          <div className={styles.rasp}>
            <Image src="/rasp.jpg" fill objectFit="contain" quality="100" />
          </div>
          <div className={styles.rasp_logo}>
            <Image
              src="/rasp_logo.png"
              fill
              objectFit="contain"
              quality="100"
            />
          </div>
        </div>
        <br></br>
      </Main>
    </>
  );
}
