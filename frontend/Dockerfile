# Stage 1: Build da aplicação Angular
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci

# Copia o código fonte
COPY . .

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll"]
