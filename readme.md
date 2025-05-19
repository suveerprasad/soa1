## Setup

### Server and Client Setup

1. Navigate to the server directory:
   ```bash
   cd server
   npm install
    ```

2. Navigate to client directory
     ```bash
   cd client
   npm install
    ```

### Run using dockerfile

1. Build the Docker image from the project root:
    ```bash
    docker build -t soa-products-service ./server
    ```

2. Run the container:
    ```bash
    docker run -p 3000:3000 -d --name products-service soa-products-service
    ```

3. Verify the container is running:
    ```bash
    docker ps
    ```

4. To stop and remove the container:
    ```bash
    docker stop products-service && docker rm products-service
    ```

### Run Manually
1.
    ```bash
        cd server
        npm run dev
    ```
2.
    ```bash
        cd client
        npm run dev
    ```

### Docker Build/Run Issues

1. Clean up existing containers:

    ```bash
        docker rm -f products-service
        Rebuild the image:
    ```

    ```bash
        docker build --no-cache -t soa-products-service ./server
    ```

### Swagger UI is available at:
 http://localhost:3000/api-docs
