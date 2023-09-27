FROM maven:3.8.3-openjdk-17-slim AS build
RUN mkdir /project
COPY . /project
WORKDIR /project
RUN mvn package

FROM openjdk:17-jdk-slim
COPY --from=build /project/target/*SNAPSHOT.jar vedledle.jar
EXPOSE 8080
EXPOSE 8001
CMD ["java","-agentlib:jdwp=transport=dt_socket,address=8001,server=y,suspend=n","-jar", "vedledle.jar"]
