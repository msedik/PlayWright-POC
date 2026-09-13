FROM mcr.microsoft.com/playwright:v1.63.0-noble

WORKDIR /playwrightPOCContainer1

RUN apt-get update && \
    apt-get install -y openjdk-17-jre-headless

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test"]