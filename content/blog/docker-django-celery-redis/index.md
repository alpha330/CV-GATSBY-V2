---
title: "Deploying Django with Redis and Celery in Docker"
date: "2025-03-07T12:30:00.000Z"
description: "A complete guide to setting up Django with Redis and Celery Worker in a Docker environment."
keywords: ["Django", "Docker", "Redis", "Celery", "Task Queue"]
---

## Introduction

Deploying Django with **Redis** and **Celery** in a Docker environment allows for scalable and efficient background task execution. In this guide, we will walk through setting up Django alongside Redis and Celery Worker using Docker and Docker Compose.

---

## Prerequisites

Before we begin, ensure you have the following installed on your system:

- **Docker** (latest version)
- **Docker Compose**
- **Python 3.10+**

---

## Setting Up the Project Structure

Create the following directory structure for our Django + Redis + Celery project:

```
django-docker-celery/
│── docker-compose.yml
│── Dockerfile
│── requirements.txt
│── app/
│   ├── Dockerfile
│   ├── celery.py
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── views.py
│   ├── tasks.py
│   ├── wsgi.py
│   ├── manage.py
│   ├── apps/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── views.py
```

---

## Writing the `Dockerfile`

Create a `Dockerfile` inside the `app/` directory:

```dockerfile
# Base image
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django project files
COPY . .

# Expose port
EXPOSE 8000

# Run migrations and start server
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
```

---

## Writing the `docker-compose.yml`

Create a `docker-compose.yml` file in the root directory:

```yaml
version: '3.8'

services:
  web:
    build: ./app
    container_name: django_app
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - ./app:/app
    ports:
      - "8000:8000"
    depends_on:
      - redis
      - celery_worker

  redis:
    image: redis:alpine
    container_name: redis_db
    ports:
      - "6379:6379"

  celery_worker:
    build: ./app
    container_name: celery_worker
    command: celery -A app worker --loglevel=info
    depends_on:
      - redis
```

---

## Installing Dependencies

In the `requirements.txt` file, add the required dependencies:

```
django
celery
redis
django-celery-beat
```

Then, install them:

```bash
pip install -r requirements.txt
```

---

## Configuring Celery in Django

In `app/celery.py`, configure Celery to use Redis:

```python
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')

celery_app = Celery('app')
celery_app.config_from_object('django.conf:settings', namespace='CELERY')
celery_app.autodiscover_tasks()
```

Modify `settings.py` to add Celery configurations:

```python
CELERY_BROKER_URL = 'redis://redis:6379/0'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
```

---

## Creating a Celery Task

In `tasks.py`, define a sample task:

```python
from celery import shared_task

@shared_task
def add(x, y):
    return x + y
```

Call this task from a Django view:

```python
from django.http import JsonResponse
from .tasks import add

def test_task(request):
    result = add.delay(4, 6)
    return JsonResponse({'task_id': result.id})
```

---

## Running the Docker Containers

Now, build and start the Docker containers:

```bash
docker-compose up --build
```

Visit `http://127.0.0.1:8000/` to see Django running. You can test Celery tasks by calling the `/test_task/` endpoint.

---

## Conclusion

By setting up Django with **Redis** and **Celery** inside Docker, you now have a robust, scalable system for handling background tasks efficiently. This setup ensures seamless communication between Django and Celery workers using Redis as a message broker.

🚀 Happy coding!

