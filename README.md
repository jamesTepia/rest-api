# rest-api
RESTful API for MyDry30 admin portal and web application

Run the application using docker
docker build -t aoc-backend .
docker run -e AWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY> -e AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY> aoc-backend