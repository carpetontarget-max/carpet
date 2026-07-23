# syntax=docker/dockerfile:1

# ─────────────────────────────────────────────────────────────────────────────
# Stage 1 — build the static Astro site into ./dist
# Node 20 matches the GitHub Actions deploy workflow. Debian "slim" (glibc) is
# used rather than alpine so Astro's image optimizer (sharp) always has a native
# binary. This stage is discarded, so it doesn't affect the final image size.
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-slim AS build
WORKDIR /app

# Install dependencies first so this layer is cached until the lockfile changes.
COPY package.json package-lock.json ./
RUN npm ci

# Build-time configuration — all OPTIONAL (the site builds fine without them):
#   PUBLIC_GA_ID          GA4 measurement ID (public; ends up in the page HTML)
#   GOOGLE_PLACES_API_KEY live Google reviews (build-time only; omit to use the
#                         reviews from src/config.ts)
#   GITHUB_PAGES          leave empty for the real domain served at the root
ARG PUBLIC_GA_ID=""
ARG GOOGLE_PLACES_API_KEY=""
ARG GITHUB_PAGES=""
ENV PUBLIC_GA_ID=$PUBLIC_GA_ID \
    GOOGLE_PLACES_API_KEY=$GOOGLE_PLACES_API_KEY \
    GITHUB_PAGES=$GITHUB_PAGES

# Copy the rest of the source and build.
COPY . .
RUN npm run build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2 — serve the static output with nginx. The final image contains ONLY
# the built site + nginx (no Node, no source, no build args).
# ─────────────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

# Clean-URL routing, gzip, caching and security headers.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# The compiled site.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
