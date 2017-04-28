FROM node:latest

LABEL maintainer "Andrea Gueugnaut <agueugnaut@octo.com>"

ENV APP /code

RUN mkdir -p $APP
WORKDIR $APP

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
ENV PATH /root/.yarn/bin:$PATH

COPY yarn.lock package.json $APP/
RUN yarn

COPY . $APP

ENTRYPOINT [ "yarn" ]
