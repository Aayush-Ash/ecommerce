# E-commerce Website

A modern e-commerce website built with HTML, CSS, and JavaScript, containerized with Docker.

## Features

- Responsive design
- Product listing
- Shopping cart functionality
- Search functionality
- Category browsing
- Add to cart with quantity tracking
- Remove items from cart
- Cart total calculation
- Notification system

## Prerequisites

- Docker
- Docker Compose

## Deployment

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build and start the container:
   ```bash
   docker-compose up -d
   ```

3. Access the website:
   - Open your web browser and navigate to `http://localhost:80`

## Stopping the Container

To stop the container:
```bash
docker-compose down
```

## Container Management

- View container logs:
  ```bash
  docker-compose logs -f
  ```

- Restart the container:
  ```bash
  docker-compose restart
  ```

## Development

To make changes to the website:
1. Modify the HTML, CSS, or JavaScript files
2. Rebuild the container:
   ```bash
   docker-compose up -d --build
   ```

## License

This project is licensed under the MIT License. 