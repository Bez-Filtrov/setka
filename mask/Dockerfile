FROM oven/bun:1-alpine AS base
WORKDIR /app

ENV NODE_ENV=production

FROM base AS dependencies
COPY package.json bun.lock* ./

RUN bun install --frozen-lockfile --production

FROM base AS builder

COPY tsconfig.json* ./
COPY src/ ./src/

COPY --from=dependencies /app/node_modules/ ./node_modules

RUN bun build ./src/index.ts --compile --outfile server

FROM base AS runner

COPY --from=builder /app/server ./server

CMD ["./server"]
