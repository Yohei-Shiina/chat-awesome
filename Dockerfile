FROM node:18-alpine3.15

LABEL version="0.0"

ENV VAL_1="VAL_1" VAL_2="VAL_2"

RUN apk update && apk add git

WORKDIR /workspace

COPY . .