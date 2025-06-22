up:
	docker-compose up --build -d

start:
	docker-compose start

stop:
	docker-compose start

down:
	docker-compose down

status:
	docker-compose ps

backend-migrate:
	docker-compose exec backend python manage.py migrate

backend-createsuperuser:
	docker-compose exec backend python manage.py createsuperuser

backend-load-test-data:
	docker-compose exec backend python manage.py load_product_data

backend-shell:
	docker-compose exec backend bash

frontend-shell:
	docker-compose exec frontend bash

collectstatic:
	docker-compose exec backend python manage.py collectstatic --noinput
