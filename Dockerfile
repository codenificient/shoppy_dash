# syntax=docker/dockerfile:1.7
FROM node:22-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@10
COPY package*.json pnpm-lock.yaml* ./
RUN pnpm install --no-frozen-lockfile
COPY . .
ENV CI=true
ENV GENERATE_SOURCEMAP=false
RUN pnpm run build

FROM nginx:1.27-alpine AS runner
RUN apk add --no-cache wget
COPY --from=builder /app/build /usr/share/nginx/html
RUN printf 'server {\n  listen 3000;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / { try_files $uri $uri/ /index.html; }\n  location /health { return 200 "ok\\n"; add_header Content-Type text/plain; }\n}\n' > /etc/nginx/conf.d/default.conf
RUN rm -f /etc/nginx/conf.d/default.conf.default 2>/dev/null || true
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
