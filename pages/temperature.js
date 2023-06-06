import Main from "../components/main.js";
import Head from "next/head";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const localisations = {
  node1: "Bureau de M. Ciarletta",
  node2: "Techlab : salle des oridnateurs",
  node3: "Techlab : salle des imprimantes 3D",
  node4: "Espaces communs : salle de pause",
  node5: "Salle de cours du dép'info",
  node6: "Toilettes",
  node: "Terasse du 4ème étage",
};

export default function Concept() {
  const [measures, setMeasures] = useState([]);
  useEffect(() => {
    const fetchMeasures = async () => {
      const { data, error } = await supabase
        .from("measures")
        .select()
        .order("created_at", { ascending: false });
      // Ne garder que la dernière mesure de chaque capteur identifieé par sensor_name
      const lastMeasures = [];
      const sensor_names = [];
      for (let i = 0; i < data.length; i++) {
        if (!sensor_names.includes(data[i].sensor_name)) {
          lastMeasures.push(data[i]);
          sensor_names.push(data[i].sensor_name);
        }
      }
      // trier data par ordre croissant de sensor_name
      lastMeasures.sort((a, b) => (a.sensor_name > b.sensor_name ? 1 : -1));
      setMeasures(lastMeasures);
    };
    fetchMeasures();
  }, []);

  const [lastUpdate, setLastUpdate] = useState("");
  useEffect(() => {
    const fetchLastUpdate = async () => {
      const { data, error } = await supabase

        .from("measures")
        .select()
        .order("created_at", { ascending: false })
        .limit(1);
      setLastUpdate(format_date(data[0].created_at));
    };
    fetchLastUpdate();
  }, []);

  return (
    <>
      <Head>
        <title>Température - Réseaux Mesh</title>
      </Head>

      <Main>
        <h2>Température et humidité</h2>
        <br></br>
        <p>
          Voici les données de température et d'humidité relevées par les
          capteurs placés dans l'école des Mines de Nancy.
        </p>
        <br></br>
        <p>Les données sont mises à jour toutes les X minutes.</p>
        <br></br>

        <div>
          <table style={{ borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr>
                <th style={{ padding: "20px", align: "center" }}>Capteur</th>
                <th style={{ padding: "20px", align: "center" }}>
                  Localisation
                </th>
                <th style={{ padding: "20px", align: "center" }}>
                  Température (°C)
                </th>
                <th style={{ padding: "20px", align: "center" }}>
                  Humidité (%)
                </th>
                <th style={{ padding: "20px", align: "center" }}>
                  Dernière mise à jour
                </th>
              </tr>
            </thead>
            <tbody>
              {measures.map((measure) => (
                <tr key={measure.id}>
                  <td style={{ padding: "10px", align: "center" }}>
                    {measure.sensor_name}
                  </td>
                  <td style={{ padding: "10px", align: "center" }}>
                    {localisations[measure.sensor_name]}
                  </td>
                  <td style={{ padding: "10px", align: "center" }}>
                    {measure.temperature}
                  </td>
                  <td style={{ padding: "10px", align: "center" }}>
                    {measure.humidity}
                  </td>
                  <td style={{ padding: "10px", align: "center" }}>
                    {format_date(measure.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <br></br>
        <p style={{ textAlign: "right" }}>
          Dernière mise à jour : {lastUpdate}
        </p>
      </Main>
    </>
  );
}

function format_date(date) {
  // Format date as: 11 février 2023, 11h23
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("fr", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("fr", { month: "long" }).format(d);
  const da = new Intl.DateTimeFormat("fr", { day: "2-digit" }).format(d);
  const ho = new Intl.DateTimeFormat("fr", { hour: "2-digit" }).format(d);
  const mi = new Intl.DateTimeFormat("fr", { minute: "2-digit" }).format(d);
  return `${da} ${mo} ${ye}, ${ho.slice(0, 2)}h${mi}`;
}
