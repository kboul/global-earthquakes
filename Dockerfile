FROM node:22-alpine

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

COPY package.json .

RUN pnpm install

# Copy the rest of the files
COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]