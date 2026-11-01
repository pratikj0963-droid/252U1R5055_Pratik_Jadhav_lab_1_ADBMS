# BDF Lab 1 - Node.js and Express Server

**Live Deployment:** Not deployed yet. Add Render URL after deployment.

## Student Details

- Name: Pratik Jadhav 
- Registration Number: 252U1R5055
- Section: S-10
- Course: Backend Development Fundamentals
- Lab: Lab 1
- Faculty: SAI SHIVA TEJA SIR

## Objective

To create a web server using Node.js and Express.js,
implement GET routes, handle unknown routes, and verify
HTTP status codes.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm
- Git and GitHub
- Render (deployment)

## Project Structure

bdf-lab1/
  screenshots/
    home.png
    about.png
    time.png
    404.png
  server-http.js
  server.js
  package.json
  package-lock.json
  .gitignore
  README.md

## Installation and Execution

### Prerequisites

Install Node.js and npm.

### Install dependencies

npm install

### Run the basic HTTP server

npm run start:http

Output: Hello

Stop with Ctrl+C before starting Express.

### Run the Express server

npm start

Server: http://localhost:3000

## API Endpoints

| Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | / | Welcome message | 200 |
| GET | /about | Student details in JSON | 200 |
| GET | /time | Current date and time | 200 |
| GET | /unknown | Page Not Found | 404 |

## Example Responses

### GET /

Welcome to the BDF Lab Server

### GET /about

{
  "name": "YOUR FULL NAME",
  "section": "YOUR SECTION"
}

### GET /time

{
  "currentDateTime": "Current server date and time"
}

### GET /unknown

404 - Page Not Found

The date and time are generated dynamically.

## Understanding package.json

- name: Project package name.
- version: Current project version.
- description: Short project summary.
- main: Main JavaScript entry file.
- scripts: Commands used to execute the project.
- dependencies: Required installed packages.
- type: JavaScript module system.
- license: Project license information.
- author: Project creator.
- keywords: Search keywords for the package.

The package-lock.json records dependency versions.
The node_modules folder contains installed dependencies.

## Screenshots

Add these four screenshots after testing:

1. screenshots/home.png
2. screenshots/about.png
3. screenshots/time.png
4. screenshots/404.png

## Deployment

Platform: Render
Runtime: Node
Build Command: npm install
Start Command: npm start

Update this section with the public URL after deployment.

## Notes

- Express.js handles HTTP requests.
- All successful routes return status 200.
- Unknown routes return status 404.
- node_modules is excluded from version control.
- No .env files or passwords are committed.
- The server supports Render's PORT environment variable.

## Result

Node.js HTTP and Express.js servers implemented.

Local testing and Render deployment are to be verified
before final submission.
