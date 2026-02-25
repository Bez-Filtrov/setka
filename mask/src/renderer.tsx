import { Html } from "@elysiajs/html";
import { Layout } from "./components/Layout";
import { PokemonCard } from "./components/PokemonCard";
import { ServerInfo } from "./components/ServerInfo";

interface PageData {
  ip: string;
  serverTime: string;
  pokemon: {
    name: string;
    image: string;
    types: string[];
  };
}

export function renderPokemonPage(data: PageData) {
  return (
    <Layout title="Покемон дня">
      <ServerInfo ip={data.ip} time={data.serverTime} />
      <PokemonCard
        name={data.pokemon.name}
        image={data.pokemon.image}
        types={data.pokemon.types}
      />
    </Layout>
  );
}

export function renderErrorPage() {
  return (
    <Layout title="Ошибка">
      <div style={{ textAlign: "center", color: "#e74c3c", padding: "2rem" }}>
        <h2>Произошла ошибка при загрузке данных</h2>
        <p>Пожалуйста, попробуйте позже</p>
      </div>
    </Layout>
  );
}
