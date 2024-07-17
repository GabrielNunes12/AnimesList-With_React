FROM node:20.04 # Base Image
WORKDIR /frontend # Working Directory
COPY . . /frontend # Copy entire folder to working directory
RUN npm install # installing dependencies
CMD ["node", "Deu certo!"] # running node command if the installation is successful
RUN npm start # running the application