build:
	cd server && $(MAKE) build

run:
	docker-compose up -d
	cd client && npm start

stop:
	docker-compose down
