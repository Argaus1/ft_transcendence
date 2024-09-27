## NEED TO ADD SOME RULES FOR HELPING TO DEV

all: banner up

up:
	@echo "Starting the project"
	-docker compose -f docker-compose.yml up -d

down:
	@echo "Stopping the project"
	-docker compose -f docker-compose.yml down

stop:
	@echo "Down the project"
	-docker compose -f docker-compose.yml stop

reset: down
	-docker volume rm #need to add all volumes
	-docker container prune -f
	-docker rmi $$(docker images -a -q)
	-docker volume prune -f
	-docker image prune -f -a
	-docker network prune -f
	-docker builder prune --all

hard-reset: reset
	-docker system prune --all --volumes -f

setup:
	@echo "Setting up the project"
	-bash ./scripts/packages.sh
	-bash ./scripts/env.sh

rebuild: reset all

sujet:
	@xdg-open https://cdn.intra.42.fr/pdf/pdf/133398/en.subject.pdf </dev/null >/dev/null 2>&1

banner:
	@echo "\033[1;32m _____                                        _                     \033[0m"
	@echo "\033[1;32m/__   \\_ __ __ _ _ __  ___  ___ ___ _ __   __| | ___ _ __   ___ ___ \033[0m"
	@echo "\033[1;32m  / /\\/ '__/ _\` | '_ \\/ __|/ __/ _ \\ '_ \\ / _\` |/ _ \\ '_ \\ / __/ _ \\ \033[0m"
	@echo "\033[1;32m / /  | | | (_| | | | \\__ \\ (_|  __/ | | | (_| |  __/ | | | (_|  __/ \033[0m"
	@echo "\033[1;32m \\/   |_|  \\__,_|_| |_|___/\\___\\___|_| |_|\\__,_|\\___|_| |_|\\___\\___| \033[0m"
	@echo "\033[1;32m                                                                     \033[0m"

.PHONY: setup banner
