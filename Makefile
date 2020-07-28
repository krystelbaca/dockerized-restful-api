.PHONY: dockerized_restful_api dev, debug, install setup and test

# make setup: creates the docker volumes needed:
setup: 
	docker volume create restful_api_data

# make install: install dependencies in docker
install: 
	rm -rf node_modules
	docker-compose run --rm api npm install

# make dev: runs the server in development mode
dev: 
	docker-compose up api

# WIP::make test: runs unit and functional tests
test:
	docker-compose -f docker-compose.yaml -f run --rm api

# make api-bash: enters the dockerized_restful_api bash
api-bash:
	docker exec -it dockerized_restful_api bash