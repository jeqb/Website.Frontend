## Local Development

cd website-frontend

npm install

## BUILD/RUN COMMANDS for docker on a local machine

docker build -t website:frontend .

docker run -it --rm -p 3000:80 website:frontend

access it on http://localhost:3000/

## To kill containers (remove backslash if copying from md file)

docker stop \$(docker ps -a -q); docker rm $(docker ps -a -q)