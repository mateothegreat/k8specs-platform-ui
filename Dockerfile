FROM node:alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

#RUN npm run build
RUN npm run serve:prod
#FROM nginx:alpine
#
#RUN rm -rf /usr/share/nginx/html
#
#COPY --from=builder /app/dist/k8-generator-ui /usr/share/nginx/html
#
#COPY nginx.conf /etc/nginx/conf.d/default.conf
