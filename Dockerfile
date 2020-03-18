FROM node

RUN cp /etc/localtime /etc/localtime.org
RUN ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime

RUN npm install -g nodemon pm2 serve

RUN mkdir /app
WORKDIR /app