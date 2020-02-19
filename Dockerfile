FROM node:13

WORkDIR /usr/scr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2222

CMD ["node", "app.js"]