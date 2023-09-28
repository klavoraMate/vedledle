<div align="center">
<img src="/frontend/public/logo.png" alt="Logo" width="256" height="256">
<h3 align="center">Vedledle</h3>
</div>

This project marks my initial attempt at creating a complete application that encompasses both frontend and backend
development, starting from the ground up. The primary objective of this project is to craft a website dedicated to dog
grooming services. Users will be able to sign up on the website along with their furry companions. Once registered, they
can navigate to the calendar section to make appointments for grooming sessions. Additionally, the website will feature
a welcoming landing page and an image gallery. The frontend of the application is constructed using React, while the
backend relies on Java Spring Boot, coupled with a PostgreSql database for data management.

## Tech Stack

[![React][React.js]][React-url]
[![Next][Next.js]][Next-url]
[![TypeScript][TypeScript.js]][TypeScript-url]
[![Spring][Spring.js]][Spring-url]
[![Docker][Docker.js]][Docker-url]
[![PostgreSQL][PostgreSQL.js]][PostgreSql-url]


## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Make sure that port 8080 and 5433 are not in use

## Installation

1. After cloning the project on your local system navigate to the root directory
2. Use the following command to run the containers.

### Linux/macOS
```shell
docker compose up --build
```
### Windows 
```shell
docker-compose up --build
```

When the container is composed you can access the application at http://localhost:8080/

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white

[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

[React-url]: https://reactjs.org/

[Spring.js]: https://img.shields.io/badge/spring_boot-20232A?style=for-the-badge&logo=springboot&logoColor=green

[Spring-url]: https://spring.io/projects/spring-boot

[TypeScript.js]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=#0079cc

[TypeScript-url]: https://www.typescriptlang.org/

[Docker.js]: https://img.shields.io/badge/docker-20232A?style=for-the-badge&logo=docker&logoColor=#0079cc

[Docker-url]: https://www.docker.com/

[PostgreSQL.js]: https://img.shields.io/badge/postgresql-20232A?style=for-the-badge&logo=postgresql&logoColor=#0079cc

[PostgreSQL-url]: https://www.postgresql.org/
