import Main from "../components/main.js";
import Head from "next/head";
import styles from "@/styles/concept.module.css";

export default function Concept() {
  return (
    <>
      <Head>
        <title>Concept - Réseaux Mesh</title>
      </Head>

      <Main>
        <h2>C'est quoi un réseau Mesh ?</h2>
        <br></br>
        <p>
          Dans la topologie de réseau Mesh,{" "}
          <b>tous les noeuds sont connectés pair à pair </b>
          sans hiérarchie centrale, formant ainsi une structure en forme de
          filet. Par conséquent, chaque nœud doit recevoir, envoyer et relayer
          les données. Ceci évite d'avoir des points névralgiques qui, s'ils
          tombent en panne, isolent une partie du réseau. <br></br>Si un hôte
          est hors service, les données empruntent une route alternative. Un
          réseau en maille peut relayer les données par « inondation » (flood)
          ou en utilisant des routes (itinéraires) prédéfinies ; dans le second
          cas, le réseau doit prévoir des connexions sans interruption ou
          prévoir des déviations (routes alternatives).
        </p>
        <br></br>
        <p className={styles.source}>
          Source:{" "}
          <a href="https://fr.wikipedia.org/wiki/Topologie_mesh">
            https://fr.wikipedia.org/wiki/Topologie_mesh
          </a>
        </p>
        <br></br>
        <div className={styles.ytb}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cV5ktpaJv5Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <br></br>
        <h2>D'où ça vient ?</h2>
        <br></br>
        <p>
          Issue de la recherche militaire et utilisée notamment par les armées
          américaine et française, cette architecture reproduit le modèle de
          l'Internet tout en l'optimisant pour le sans-fil. Technologie de
          rupture par rapport aux solutions centralisées classiques sans-fil
          avec station de base, la solution en mailles autorise un déploiement
          rapide et simplifié, supporte une couverture évolutive, assure une
          grande tolérance aux pannes et aux interférences et permet une
          importante réduction des coûts d’installation et d’exploitation d'un
          réseau.
        </p>
        <br></br>
        <h2>Les avantages</h2>
        <br></br>
        <p>
          Les réseaux Mesh ont de nombreux avantages par rapport aux réseaux
          traditionnels :
        </p>
        <br></br>
        <ul className={styles.avtg}>
          <li>Plus robustes</li>
          <li>Plus fiables</li>
          <li>Plus flexibles</li>
          <li>Plus faciles à installer et à administrer</li>
          <li>Latence est réduite</li>
          <li>Débit est augmenté</li>
        </ul>{" "}
        <br></br>
        <p>
          Les réseaux Mesh sont plus robustes car ils sont moins sensibles aux
          pannes et aux changements. En effet, si un nœud tombe en panne ou est
          déplacé, les autres nœuds peuvent continuer à communiquer entre eux.
          <br></br>Ils sont plus fiables car ils sont moins sensibles aux
          interférences. En effet, si un nœud est perturbé par une interférence,
          les autres nœuds peuvent continuer à communiquer entre eux. Les
          réseaux en maille sont plus faciles à installer et à administrer car
          ils sont moins sensibles aux erreurs. En effet, si un nœud est mal
          installé, les autres nœuds peuvent continuer à communiquer entre eux.
        </p>
        <br></br>
        <h2>Les inconvénients</h2>
        <br></br>
        <p>
          Les réseaux Mesh filaires peuvent être plus coûteux à installer du
          fait du nombre de cables supplémentaire à installer.
        </p>
      </Main>
    </>
  );
}
