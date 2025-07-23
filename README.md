# Arkkan El-Khatib - Personal Portfolio

* Web application built to showcase personal projects, experience and to function as a pseudo-resume

## Setup
1. Clone Repository
2. Change Directory into repository
3. Build Docker Container - `docker build -t portfolio .`
4. Deploy Container - `docker run -it -p 80:80 portfolio`
* Docker will run the content on port 80 on a NGINX server
* * Using -p 3000:80 will allow you to access the resource 'host-name':3000

## Cloud Deployment (Manual)
1. Build Docker Container - `docker build --platform linux/amd64 -t portfolio`
2. Tag for Docker Hub - `docker tag portfolio [USERNAME]/portfolio`
3. Push to Docker Hub - `docker push [USERNAME]/portfolio`
4. Deploy to Google Cloud Platform through Cloud Run to deploy Docker container
