# ---------- BUILD ----------
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app/team-service

# parent no local correto
COPY pom.xml /app/pom.xml

# módulo
COPY team-service/pom.xml ./pom.xml
COPY team-service/src ./src

RUN mvn clean package -DskipTests

# ---------- PACKAGE ----------
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/team-service/target/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
