import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { renderPokemonPage, renderErrorPage } from "./renderer";
import { getPokemonNumber, getPokemonData, getServerTime, getClientIp } from "./utils/pokemon";

const render = async (request: Request) => {
  try {
    const clientIp = getClientIp(request);

    const pokemonNumber = getPokemonNumber(clientIp);
    const pokemon = await getPokemonData(pokemonNumber);

    const serverTime = getServerTime();

    return renderPokemonPage({
      ip: clientIp,
      serverTime,
      pokemon,
    });
  } catch (error) {
    console.error("Error:", error);
    return renderErrorPage();
  }
}

const app = new Elysia()
  .use(html())
  .get("*", async ({ request }) => render(request))
  .listen(3000);

console.log(
  `Application is running at ${app.server?.hostname}:${app.server?.port}`
);
