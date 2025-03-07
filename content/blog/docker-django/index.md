---
title: "Deploying Django 5 in Docker"
date: "2025-03-07T14:00:00.000Z"
description: "A step-by-step guide to containerizing a Django 5 project using Docker."
keywords: ["Django 5", "Docker", "Containerization", "Web Development"]
---

## Introduction
Docker provides an efficient way to deploy Django applications by containerizing them with all dependencies included. In this guide, we will set up a Django 5 project inside a Docker container.

**![Image - Docker & Django](./images/docker-django.png)**

---

## Prerequisites
Before proceeding, ensure you have:
- Docker installed on your system
- Python 3.10 or later installed (if running locally for testing)
- Basic understanding of Django and Docker

---

## Step 1: Create a Django Project
First, create a new Django 5 project:
```bash
mkdir django-docker && cd django-docker
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install django==5.0

django-admin startproject myproject .
```

Verify the project structure:
```
./django-docker/
│── myproject/
│   ├── manage.py
│   ├── myproject/
│       ├── __init__.py
│       ├── settings.py
│       ├── urls.py
│       ├── wsgi.py
│
└── Dockerfile
└── requirements.txt
└── docker-compose.yml
```

---

## Step 2: Create a `requirements.txt` File
Generate a `requirements.txt` file to list all dependencies:
```bash
pip freeze > requirements.txt
```

---

## Step 3: Create a `Dockerfile`
Create a `Dockerfile` in the root directory with the following content:

```dockerfile
# Use official Python base image
FROM python:3.10

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set working directory inside the container
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django project files
COPY . /app/

# Expose port 8000
EXPOSE 8000

# Run Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

---

## Step 4: Create `docker-compose.yml`
To simplify container management, use Docker Compose. Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - .:/app
    environment:
      - DEBUG=True
```

---

## Step 5: Build and Run the Container
Run the following command to build and start the container:
```bash
docker-compose up --build
```

Once the container starts, access the Django application at:
```
http://127.0.0.1:8000/
```

**![Image - Django Running in Docker](./images/docker-django-running.png)**

---

## Step 6: Running Migrations
To apply Django migrations inside the container, run:
```bash
docker-compose exec web python manage.py migrate
```

---

## Conclusion
By containerizing Django 5 with Docker, you ensure a consistent environment across development and production. This setup allows for better scalability and deployment flexibility.

Would you like to explore deploying Django with PostgreSQL in Docker? Let us know! 🚀

