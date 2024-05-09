FROM node:lts-alpine

WORKDIR /app

# COPY package*.json ./
COPY backend/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
