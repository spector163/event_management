FROM node:18-alpine

# Enable Corepack
RUN corepack enable

WORKDIR /app

# 1. Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# 2. Install all dependencies
RUN pnpm install

# 3. Generate Prisma client
RUN npx prisma generate

# 4. Copy only necessary files for production
COPY . .

# 5. Install only production dependencies
RUN pnpm install 

# 6. Build the application
RUN pnpm run build

ENV NODE_ENV=production

ENV DATABASE_URL="your db url here"
ENV PORT=5000

EXPOSE 5000

CMD ["pnpm","run", "start"]