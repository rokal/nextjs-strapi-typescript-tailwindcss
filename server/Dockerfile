FROM strapi/base:14-alpine as dependencies

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN npm run build

FROM strapi/base:14-alpine as production

ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=dependencies /app/ ./

#ADD curl
RUN apk add --no-cache curl

# ADD DOPPLER
RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh

EXPOSE 1337

ENTRYPOINT [ "doppler", "run", "--"]
CMD [ "yarn", "start"]
