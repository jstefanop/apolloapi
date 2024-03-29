FROM arm32v7/node:9
WORKDIR /app
RUN npm --version
RUN npm install yarn
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN rm -rf /app/package-lock.json
ENV NODE_ENV=production
RUN ./node_modules/.bin/yarn --production
RUN rm ./*.json ./yarn.lock
RUN tar -zcf ../futurebit.tar.gz .
