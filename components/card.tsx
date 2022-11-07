import Link from "next/link";
import styles from "../styles/Card.module.css";

interface Pokeresponse {
  pokemon: {
    name: string;
    url: string;
    id: number;
  };
}

function Card(pokemon: Pokeresponse) {
  return (
    <div className={styles.card}>
      <h1>{pokemon.pokemon.name} </h1>
      <img
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.pokemon.id}.png`}
        alt="a"
      />
      <button>
        <Link href={`/pokemon/${pokemon.pokemon.id}`}>more</Link>
      </button>
    </div>
  );
}

export default Card;
