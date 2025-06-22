#!/bin/bash

echo "Run migration ..."
python manage.py migrate --noinput

echo "Collecting static files..."
mkdir -p /app/staticfiles /app/media
chmod -R 755 ./staticfiles
python manage.py collectstatic --noinput

echo "Starting server..."
gunicorn shop.wsgi:application --bind 0.0.0.0:8000
