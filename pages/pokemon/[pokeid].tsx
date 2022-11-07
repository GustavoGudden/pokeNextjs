import styles from "../../styles/Pokemon.module.css";

import Image from "next/image";
import Link from "next/link";

export async function getStaticProps(context: any) {
  const { params } = context;

  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokeid}`
  );

  const poke = await data.json();

  return {
    props: { poke },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

  const data = await response.json();

  const paths = data.results.map((poke: any, index: any) => {
    return {
      params: {
        pokeid: index.toString(),
      },
    };
  });

  return { paths, fallback: false };
}

export default function Pokemon({ poke }: any) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{poke.name}</h1>
      <img
        src={`https://cdn.traction.one/pokedex/pokemon/${poke.id}.png`}
        width="200"
        height="200"
        alt={poke.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{poke.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {poke.types.map((item: any, index: any) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{poke.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{poke.weight / 10} kg</p>
        </div>
      </div>
      <button className={styles.buttonback}>
        <Link href="/">voltar</Link>
      </button>
    </div>
  );
}
