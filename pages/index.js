import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/main.js";
import Navbar from "@/components/navbar.js";
import styles from "@/styles/index.module.css";

function Personne({ fonction, nom, objectif }) {
  return (
    <>
      <div>
        <h4>{fonction}</h4>
        <p style={{ "padding-bottom": 10, "text-underline-color": "red" }}>
          {nom}{" "}
        </p>
        <hr className={styles.pers_line}></hr>
        <p>{objectif}</p>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil - Réseaux Mesh</title>
      </Head>

      <Main>
        <h2>Présentation</h2>
        <br></br>
        <p>
          De nombreuses applications nécessitent de mettre en place et de
          maîtriser un système de communication performant (robuste, haut début,
          faible latence) qui puisse être de plus déployé sur demande pour des
          robots, des appareils mobiles et des calculateurs en périphérie
          (edge/fog computing). L'objectif de ce projet est de développer une
          solution adaptive au sein de l'école reposant sur la 5G et le WiFi.
          Elle peut se présenter sous la forme d'une "valise de déploiement" qui
          contient un système de de communication comme le satellite (type
          Starlink, bulle mobile LTE/5G, radio longues portée) et qui met à
          disposition les avantages du réseau Mesh.{" "}
        </p>
        <br></br>
        <h2>Les acteurs du projet</h2>
        <br></br>

        <div className={styles.wrapper}>
          <Personne
            fonction="Encadrant"
            nom="Laurent Ciarletta"
            objectif="Améliorer le Techlab des Mines de Nancy (applications robotiques/drones)"
          />
          <Personne
            fonction="Étudiants"
            nom="Tom Marini - Émilie Enfroy"
            objectif="Acquérir des compétences en réseaux"
          />
          <Personne
            fonction="Aide"
            nom="Yohan Hernandez"
            objectif="Transmettre ses compétences sur le paramétrage d'un réseaux de microcontroleurs"
          />
        </div>
      </Main>
    </>
  );
}
