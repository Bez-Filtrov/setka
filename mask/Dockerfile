FROM oven/bun:1-alpine AS base
WORKDIR /app

FROM base AS dependencies
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

FROM base AS runner
COPY --from=dependencies /app/node_modules ./node_modules
COPY src/ ./src/

CMD ["bun", "run", "src/index.ts"]
