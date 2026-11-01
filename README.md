# BDF Lab 1 - Node.js and Express Server

**Live Deployment:** [View Live Project](https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/)

**GitHub Repository:** [View Source Code](https://github.com/pratikj0963-droid/252U1R5055_Pratik_Jadhav_lab_1_ADBMS)

**Deployment Platform:** Render  
**Deployment Status:** Live — Home endpoint confirmed

---

## Student Details

- **Name:** Pratik Jadhav
- **Registration Number:** 252U1R5055
- **Section:** S-10
- **Department:** Artificial Intelligence and Data Engineering
- **University:** Aurora Higher Education and Research Academy
- **Course:** Backend Development Fundamentals (BDF)
- **Lab:** Lab 1
- **Faculty:** Sai Shiva Teja Sir

---

## Objective

To create a web server using Node.js and Express.js, implement GET routes, handle unknown routes, and verify HTTP status codes.

The project demonstrates backend server development, API routing, JSON responses, dynamic date and time generation, error handling, and cloud deployment.

The application has been developed locally using Visual Studio Code, uploaded to GitHub, and deployed publicly using Render.

---

## Technologies Used

- **Node.js:** JavaScript runtime for backend server development.
- **Express.js:** Framework used to create web servers and API routes.
- **JavaScript:** Programming language used in this project.
- **npm:** Node Package Manager used to install dependencies.
- **VS Code:** Code editor used for development.
- **Git:** Version control system used to manage project changes.
- **GitHub:** Platform used to host project source code.
- **Render:** Cloud hosting platform used for public deployment.
- **Chrome:** Browser used to test and verify the application.
- **PowerShell:** Terminal used to execute Node.js, npm, and Git commands.

---

## Project Structure

```text
bdf-lab1/
│
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── 404.png
│
├── server-http.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### File Description

- **server-http.js:** Creates a basic HTTP server using the built-in Node.js HTTP module.
- **server.js:** Main Express.js server containing all API routes and 404 error handling.
- **package.json:** Contains project details, dependencies, and execution commands.
- **package-lock.json:** Records dependency versions for consistent installations.
- **.gitignore:** Excludes unnecessary or sensitive files from Git.
- **screenshots/:** Stores screenshots demonstrating the working server endpoints.
- **README.md:** Contains project documentation, installation instructions, API details, testing, and deployment information.

The `node_modules` directory is generated locally when dependencies are installed and is excluded from the GitHub repository.

---

## Installation and Execution

### Prerequisites

Install Node.js and npm on your computer.

Verify installation:

```bash
node -v
npm -v
```

### Clone the GitHub Repository

```bash
git clone https://github.com/pratikj0963-droid/252U1R5055_Pratik_Jadhav_lab_1_ADBMS.git
```

Open the downloaded project folder using Visual Studio Code.

### Install Dependencies

Run:

```bash
npm install
```

This command installs Express.js and all required dependencies.

### Run the Basic HTTP Server

```bash
npm run start:http
```

Alternatively:

```bash
node server-http.js
```

Open the browser and visit:

http://localhost:3000/

**Expected Output:**

```text
Hello
```

The basic HTTP server uses `http.createServer()` and listens on port 3000.

Stop the server using `Ctrl + C` before starting the Express server.

### Run the Express Server

```bash
npm start
```

Alternatively:

```bash
node server.js
```

**Expected Terminal Output:**

```text
Express server running on port 3000
```

Open:

http://localhost:3000/

The Express server provides three GET routes and custom 404 handling.

**Windows PowerShell Note:** If npm is blocked by a PowerShell execution policy, the equivalent commands `npm.cmd install`, `npm.cmd start`, and `npm.cmd run start:http` can be used.

---

## API Endpoints

| Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | `/` | Personalized welcome message | 200 |
| GET | `/about` | Student details in JSON format | 200 |
| GET | `/time` | Current date and time | 200 |
| GET | `/unknown` | Page Not Found | 404 |

---

## Example Responses

### 1. GET / — Home Route

**Live URL:**

https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/

**Response:**

```text
Hi Shiva Teja sir, Welcome to the BDF Lab Server
```

**HTTP Status:** `200 OK`

This route displays a personalized welcome message and confirms that the Express server is functioning.

### 2. GET /about — Student Details

**Live URL:**

https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/about

**Expected Response:**

```json
{
  "name": "Pratik Jadhav",
  "section": "S-10"
}
```

**HTTP Status:** `200 OK`

This endpoint returns student information in JSON format using `res.json()`.

### 3. GET /time — Current Date and Time

**Live URL:**

https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/time

**Example Response:**

```json
{
  "currentDateTime": "2026-11-01T04:00:00.000Z"
}
```

**HTTP Status:** `200 OK`

The date and time are generated dynamically using JavaScript's `new Date()` function.

The actual timestamp changes depending on when the request is made.

### 4. GET /unknown — 404 Error Handling

**Live URL:**

https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/unknown

**Expected Response:**

```text
404 - Page Not Found
```

**HTTP Status:** `404 Not Found`

This route demonstrates custom error handling for unknown URL paths.

---

## Understanding package.json

The `package.json` file stores important information about the Node.js project.

### Project Configuration

```json
{
  "name": "bdf-lab1",
  "version": "1.0.0",
  "description": "BDF Lab 1 Node.js and Express Server",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "start:http": "node server-http.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.3.0"
  },
  "type": "commonjs"
}
```

### Explanation of Fields

- **name:** Defines the project package name.
- **version:** Specifies the current version of the project.
- **description:** Provides a short project summary.
- **main:** Identifies the main application file.
- **scripts:** Contains commands to execute the application.
- **dependencies:** Lists the required npm packages.
- **type:** Specifies the JavaScript module system.
- **license:** Specifies the declared software license.
- **author:** Stores the package author information when provided.
- **keywords:** Contains optional search keywords.

### Important Project Files

**package.json:** Defines project configuration and required dependencies.

**package-lock.json:** Records the installed dependency tree and resolved versions.

**node_modules:** Contains the actual installed package files and can be recreated using `npm install`.

---

## Screenshots

The following screenshots provide evidence of the working Express.js routes.

### Screenshot 1 — Home Route

Displays the personalized welcome message.

![Home Route](screenshots/home.png)

### Screenshot 2 — About Route

Displays the student's name and section in JSON format.

![About Route](screenshots/about.png)

### Screenshot 3 — Time Route

Displays the dynamically generated current date and time.

![Time Route](screenshots/time.png)

### Screenshot 4 — 404 Error Route

Displays the custom page-not-found response.

![404 Error Route](screenshots/404.png)

The screenshots should be captured from the deployed Render website with the public URL visible in the browser address bar.

---

## Testing

The application can be tested using a browser or curl.

### Local Testing

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/about
curl -i http://localhost:3000/time
curl -i http://localhost:3000/unknown
```

### Public Deployment Testing

```bash
curl -i https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/
curl -i https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/about
curl -i https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/time
curl -i https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/unknown
```

### Expected HTTP Status Codes

| Route | Expected HTTP Status |
|---|---|
| `/` | 200 OK |
| `/about` | 200 OK |
| `/time` | 200 OK |
| `/unknown` | 404 Not Found |

The home endpoint has been confirmed working on the publicly deployed website. The remaining routes are implemented in the uploaded source code and should be verified on the live website before final submission.

---

## GitHub Repository

The complete project source code is hosted on GitHub.

**Repository Name:** `252U1R5055_Pratik_Jadhav_lab_1_ADBMS`

**Repository Owner:** `pratikj0963-droid`

**Repository Branch:** `main`

**Repository Link:**

https://github.com/pratikj0963-droid/252U1R5055_Pratik_Jadhav_lab_1_ADBMS

### GitHub Commands Used

```bash
git init
git add .
git commit -m "BDF Lab 1 - Node.js and Express Server"
git branch -M main
git remote add origin https://github.com/pratikj0963-droid/252U1R5055_Pratik_Jadhav_lab_1_ADBMS.git
git push -u origin main
```

GitHub is used to store, manage, and share the project source code and documentation.

---

## Deployment

The application has been deployed publicly using **Render Web Service**.

### Deployment Information

| Setting | Value |
|---|---|
| Platform | Render |
| Service Type | Web Service |
| Runtime | Node.js |
| GitHub Branch | main |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Port | `process.env.PORT` or 3000 |
| Deployment | Public HTTPS website |
| Plan | Free |

### Live Deployment URL

**https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/**

### Deployment Procedure

1. Created and tested the Node.js and Express.js application in VS Code.
2. Initialized Git and uploaded the project to GitHub.
3. Logged in to Render and created a new Web Service.
4. Connected the GitHub repository.
5. Selected Node.js as the runtime.
6. Configured `npm install` as the build command.
7. Configured `npm start` as the start command.
8. Selected the Free compute instance.
9. Deployed the application using Render.
10. Confirmed that the public home page displays the personalized welcome message.

### Port Configuration

The application uses:

```javascript
const PORT = process.env.PORT || 3000;
```

This allows Render to provide the server port automatically.

When running locally, the default port is 3000.

### Deployment Result

The build completed successfully, and the Express application is accessible through the Render public URL.

The deployed home page returns:

```text
Hi Shiva Teja sir, Welcome to the BDF Lab Server
```

---

## Notes

- Express.js is used to handle incoming HTTP requests.
- The basic Node.js HTTP server and Express.js server run separately.
- The `/` endpoint returns a personalized welcome message.
- The `/about` endpoint returns student details in JSON format.
- The `/time` endpoint generates the current date and time dynamically.
- Successful routes return HTTP status 200.
- Unknown routes return HTTP status 404.
- The `node_modules` folder is excluded from version control.
- No `.env` files or passwords are committed.
- The application supports Render's `PORT` environment variable.
- The project is available through a public HTTPS URL.
- The Render Free service may take longer to respond after a period of inactivity.

---

## Result

The Node.js HTTP server and Express.js server have been successfully implemented.

The project includes:

- Basic Node.js HTTP server.
- Express.js backend server.
- Three GET routes.
- Student information in JSON format.
- Dynamic current date and time.
- Custom 404 error handling.
- HTTP response status codes.
- Browser and command-line testing.
- GitHub repository.
- Render cloud deployment.
- Project documentation and screenshots.

The project has been uploaded to GitHub and publicly deployed using Render.

The live home page has been confirmed working with the updated welcome message.

---

## Conclusion

This project demonstrates the fundamentals of backend development using Node.js and Express.js.

It provides practical understanding of creating HTTP servers, handling requests and responses, implementing API routes, returning JSON data, generating dynamic information, and managing HTTP status codes.

Git and GitHub are used for version control and source code hosting, while Render is used to deploy the backend application publicly.

The project provides a foundation for developing advanced backend applications involving databases, authentication, and REST APIs.

---

**Project Developed By:** Pratik Jadhav  
**Registration Number:** 252U1R5055  
**Section:** S-10  
**Department:** Artificial Intelligence and Data Engineering  
**Course:** Backend Development Fundamentals  
**University:** Aurora Higher Education and Research Academy  
**Faculty:** Sai Shiva Teja Sir

**GitHub:** https://github.com/pratikj0963-droid/252U1R5055_Pratik_Jadhav_lab_1_ADBMS

**Live Project:** https://two52u1r5055-pratik-jadhav-lab-1-adbms.onrender.com/
