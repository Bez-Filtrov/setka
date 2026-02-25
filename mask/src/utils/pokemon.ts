const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";
const TOTAL_POKEMON = 151;

interface PokemonData {
  name: string;
  image: string;
  types: string[];
}

export function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getPokemonNumber(ip: string): number {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const hashInput = `${ip}-${dateString}`;
  const hash = simpleHash(hashInput);
  return (hash % TOTAL_POKEMON) + 1;
}

export async function getPokemonData(pokemonNumber: number): Promise<PokemonData> {
  const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${pokemonNumber}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pokemon: ${response.status}`);
  }

  const data = await response.json();

  return {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
    types: data.types.map((type: { type: { name: string } }) => type.type.name),
  };
}

export function getServerTime(): string {
  return new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function getClientIp(request: Request): string {
  const headers = request.headers;

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "127.0.0.1";
}
