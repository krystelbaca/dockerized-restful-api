# dockerized-restful-api

Dockerized RESTful API

Side project: dockerized application as a microservice. 
Author: Krystel Baca Salayandia. 

# Local setup

## Pre-requisites:

1. Docker installed


## Launch the app
### Using docker-compose:

Start the API:

Create manually the external volume `restful_api_data` with:

```sh
docker volume create restful_api_data
```

Then use this command to build the app:

```
docker-compose up
```

```sh
npm start
```

Development mode:

```sh
npm run dev
```

Test the **Health-Endpoint** from another terminal:

```sh
$ curl localhost:3002/api/v1/health
# {"status":"ok"}
```

# Test

```sh
npm test
```




