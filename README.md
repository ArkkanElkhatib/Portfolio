# Arkkan El-Khatib - Personal Portfolio

* Web application built to showcase personal projects, experience and to function as a pseudo-resume

## Setup
1. Clone Repository
2. Change Directory into repository
3. Build Docker Container with `docker build -t portfolio .`
4. Deploy Container with `docker run -it -p 80:80 portfolio`
* Docker will run the content on port 80 on a NGINX server
* * Using -p 3000:80 will allow you to access the resource 'host-name':3000

