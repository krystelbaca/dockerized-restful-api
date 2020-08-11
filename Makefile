.PHONY: dockerized_restful_api dev, debug, install setup and test

# 				Initial API Setup
# ==================================================

# make setup: creates the docker volumes needed:
setup: 
	docker volume create restful_api_data

# make install: install dependencies in docker
install: 
	rm -rf node_modules
	docker-compose run --rm api npm install

# 				POSTGRES DB Service
# ==================================================

# make db-setup: creates the db-schema
db-setup: db-init db-migrations db-seed

# make db: runs postgres
db:
	docker-compose up -d postgres

# make db-init: created the db
db-init:
	docker-compose run --rm api npm run db:init

# make db-migrations: run the db migrations
db-migrations:
	docker-compose run --rm api npm run db:migrations

# make db-seeds: seeds the db
db-seed:
	docker-compose run --rm api npm run db:seed

#				RESTFUL API SERVICE
# =================================================

# make build: builds the container using the docker-compose
build:
	docker-compose up --build

# make dev: runs the server in development mode
dev: 
	docker-compose up api

# make test: runs unit and functional tests
test:
	docker-compose run --rm api npm test

# make api-bash: enters the dockerized_restful_api bash
api-bash:
	docker exec -it dockerized_restful_api bash