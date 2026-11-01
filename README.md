# Lab 1: Node.js and Express server

**Name:** Your Name Here  
**Registration Number:** Your Reg Number Here  
**Section:** Your Section Here

### Live Link

- [Render / Railway URL Here](https://your-deployed-app-link.com) _(Or state 'Not applicable' / 'Postman Screenshots Attached' if not deployed)_

### How to Run

Follow these steps to set up and run the server locally:

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Start the Server:**
   ```bash
   node index.js
   ```

### Endpoints Table

| Method  | Path           | Status Code   | Description                                                     |
| :------ | :------------- | :------------ | :-------------------------------------------------------------- |
| **GET** | `/`            | 200 OK        | Returns a simple plain-text welcome message.                    |
| **GET** | `/about`       | 200 OK        | Returns a JSON object with student name and section details.    |
| **GET** | `/time`        | 200 OK        | Returns a JSON object with the current system date and time.    |
| **ANY** | `/*` (Unknown) | 404 Not Found | Returns a structured 404 JSON error message for invalid routes. |

### Screenshots

_Note: Ensure you place your screenshots inside a folder named `screenshots/` inside your `lab-01` directory._

#### Welcome Route (`/`)

![Welcome Route](screenshots/welcome.png)

#### About Route (`/about`)

![About Route](screenshots/about.png)

#### Time Route (`/time`)

![Time Route](screenshots/time.png)

#### 404 Catch-All Route

![404 Error](screenshots/404.png)

### Notes: Problems Faced & Solutions

- **Problem:** Port 3000 was already in use by another application.
- **Solution:** Used `kill-port` or changed the port constant to `3001` temporarily during testing before reverting back to the requested port `3000`.
