# ---------- builder ----------
FROM node:20-alpine AS builder

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund

COPY src ./src
COPY public ./public
COPY public-readonly ./public-readonly
COPY icon.png icon-public.png ./


# ---------- runtime ----------
FROM node:20-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY --from=builder /app /app

RUN mkdir -p /app/data/uploads && chown -R 99:100 /app/data

ENV NODE_ENV=production
ENV PORT=3010
ENV PUBLIC_PORT=3011
ENV DB_PATH=/app/data/site.db

EXPOSE 3010 3011

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD curl -f http://localhost:3011/api/profile || exit 1

USER 99:100

CMD ["node", "src/server.js"]
