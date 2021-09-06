## Local Development

cd website-frontend

npm install

## BUILD/RUN COMMANDS for docker on a local machine

docker build -t website:frontend .

docker run -it --rm -p 3000:80 website:frontend

access it on http://localhost:3000/