FROM strapi/base:14
ENV NODE_ENV development

# ADD DOPPLER
RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh


WORKDIR /app

RUN doppler secrets

EXPOSE 1337

ENTRYPOINT [ "npm", "run", "develop"]
