FROM maven:3.8.3-openjdk-17-slim AS build
RUN mkdir /project
COPY . /project
WORKDIR /project
RUN mvn clean install

FROM openjdk:17-jdk-slim
COPY --from=build /project/target/*SNAPSHOT.jar authServer.jar
EXPOSE 8080
CMD ["java", "-jar", "authServer.jar"]
