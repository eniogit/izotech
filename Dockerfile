FROM node:22.14.0-alpine3.21 AS base

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:22.14.0-alpine3.21 AS production

WORKDIR /app

COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/public ./public

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD [ "node", "server.js" ]

EXPOSE 3000

