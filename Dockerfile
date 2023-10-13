# Stage 1: Build the frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install --legacy-peer-deps
COPY frontend/ ./
RUN npm run build

# Stage 2: Build the backend with Maven
FROM maven:3.8.3-openjdk-17-slim AS backend-build
WORKDIR /app/backend
COPY backend/pom.xml ./
RUN mvn dependency:go-offline
COPY backend/ ./
RUN mvn clean install

# Stage 3: Create the final image
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=frontend-build /app/frontend/out/ /app/backend/src/main/resources/static/
COPY --from=backend-build /app/backend/target/*SNAPSHOT.jar vedledle.jar
EXPOSE 8080
CMD ["java", "-jar", "vedledle.jar"]

