FROM node:16 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/
COPY startup.sh ./

# Install app dependencies
RUN yarn install

COPY . .

RUN yarn run build

# Make the script executable
RUN chmod +x ./startup.sh

FROM node:16

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/startup.sh ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
ENTRYPOINT ["./startup.sh"]