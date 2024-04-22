# TheDron
Elmenus Task


## Introduction

This repository contains the source code for the Drone API.


## Installation
### Locally
#### Prerequisites
> Make sure you have Node 16 and npm installed on your machine.

To run the application locally, use the following command:
1. Install dependencies:
  ```bash
npm install 
```

2. Compile and build Code 
  ```bash
    npm run compile
```
3. Run The App 
  ```bash
    npm start
```

> The application will be accessible at http://localhost:5052.
---

### Running with Docker 

    docker-compose up

    This command will build the Docker image and start the application in containers.

    Open your web browser and access the application at http://localhost:5052.

---
## Architecture

The project follows MVC architecture, organized into modules with a clear separation of concerns. The application is built with TypeScript and runs on Node.js.
 
#### Technoclogies : 

1. Postgres DB : 
Relations between Data is Structured 
2. Jest : 
to implement unit/integration Testing 
3. Swagger : 
to Implement API Documentation 

## Design Documents:

#### ![Architecture Design]()
#### API DOCS: ![OpenAPI doc]()
> run Project and go to this link : 
[link](http://localhost:5052/docs)

#### ![CLASS DIAGRAM]()
#### ![SEQUENCE DIGRAM]()

---

### File Structure

The project's file structure is organized as follows:

![Project Structue]()



---

## CI/CD
I am using Github Actions To Run Automation Tasks on Pushing To Master Branch to Track Code Quality 
Implmented Tasks 
1. Test Build : Run Tests Automatic 
2. Deploy : To Build Docker Image and Push To Docker Hub 

## Run Testing 
To Run Tests 
1. npm install 
2. npm run compile 
3. npm run test 
Make Sure You are using Node 16 


## TO DO  
1. implement more Test Cases to increase the Coverage 
2. Enhance Automation Tasks in CI/ CD 
3. Implement Monitoring System (Prometheus)
4. Handle Errors
5. Auto Generate Schema on Swagger As I did for APIs
6. Security on APP and APIs Like Implementing JWT Token
7. Validation on Param's and inputs
8. Auto Generate Swagger.json File to save Time while implementing any new APIs
9. Auto Generate Swagger Json From Models to avoid Redandncy 
