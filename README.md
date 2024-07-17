## next steps
- [x] docker image
- [ ] host on AWS servers
- [x] Continuos Integration pipelines using Github Actions

## Starting the Project via Docker

To start the project using Docker, follow these steps:

1. Make sure you have Docker installed on your machine.
2. Open a terminal or command prompt.
3. Navigate to the root directory of the project.
4. Build the Docker image by running the following command:
    ```
    docker build -t anime-in-reactjs .
    ```
5. Once the image is built, start a Docker container by running the following command:
    ```
    docker run -p 3000:3000 anime-in-reactjs
    ```
6. The project should now be running and accessible at `http://localhost:3000`.

## Setting up the Project and Installing Dependencies

To set up the project and install dependencies using NPM, follow these steps:

1. Make sure you have Node.js and NPM installed on your machine.
2. Open a terminal or command prompt.
3. Navigate to the root directory of the project.
4. Run the following command to install the project dependencies:
    ```
    npm install
    ```
5. Once the dependencies are installed, you can start the project by running the following command:
    ```
    npm start
    ```
6. The project should now be running and accessible at `http://localhost:3000`.

## Running Tests

To run all tests using Jest, follow these steps:

1. Make sure you have Node.js and NPM installed on your machine.
2. Open a terminal or command prompt.
3. Navigate to the root directory of the project.
4. Run the following command to execute all tests:
    ```
    npm run test
    ```
5. Jest will run all the tests in your project and display the results in the terminal.
