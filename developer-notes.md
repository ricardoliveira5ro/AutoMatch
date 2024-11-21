
## Backend deploy

#### Fly.io (initial choice)

* Pay As You Go plan (no free tier)
* `mvn package` to build project jar file
* Dockerfile example

```
FROM azul/zulu-openjdk-alpine:21.0.1
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

* [Install powershell latest version](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4)
* Instal fly cli: pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
* Fly cli commands

    * fly auth
    * fly launch (it will generate fly.toml file)
    * fly secrets set key=value
    * fly deploy

#### Koyeb

* Launch linking github repository available, however it doesn't allow deploy in sub folders inside repo (in this case i have backend and frontend sub folders and want to deploy only the backend)
* Docker 

    * `docker login -u [your-username]`
    * `docker build -t [your-username]/[your-app]:latest .`
    * (Test locally) `docker run -p 8080:8080 [your-app]`

        * Set environment variables `-e key=value`
    
    * `docker tag [your-tag] [your-username]/[your-app]:latest`
    * `docker push [your-username]/[your-app]:latest`

* In koyeb create a new service, user docker and image will be [your-username]/[your-app]
* Add all your environments variables 
* Note that exposed port, ex: 8080 should be the same in health check


## Dev and Prod profiles

#### Spring Boot backend

* Create *application-dev.properties* and *application-prod.properties* to set different secrets for each environment (db_url, username, password ..)
* For Dev (localhost) add VM option in configuration `-Dspring.profiles.active=dev`
* For Prod set environment variable `SPRING_PROFILES_ACTIVE=prod`

#### React frontend

* Cant store any secrets in frontend side, this is a mechanism to changed which backend URL use depending on the profile
* Create *.env.development* and *.env.production* and set the URL `REACT_APP_BASE_URL=http://localhost:8080`
* Use this variable `process.env.REACT_APP_BASE_URL`