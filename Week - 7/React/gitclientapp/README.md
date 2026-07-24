# Week 3 - Git Client App

## Objective

Develop a React application that fetches and displays GitHub repository names for a specified user using the GitHub REST API. The application also includes unit testing for the API client using Jest and Axios mocks.

---

## Features

- Fetch public repositories from GitHub.
- Display repository names dynamically.
- Use Axios to perform HTTP requests.
- Implement API calls in a separate service module.
- Unit test API calls using Jest.
- Mock Axios requests to avoid actual API calls during testing.

---

## Technologies Used

- React JS
- JavaScript (ES6)
- Axios
- GitHub REST API
- Jest
- CSS3

---

## React Concepts Covered

- Functional Components
- React Hooks (`useState`, `useEffect`)
- API Integration
- Axios
- Promises
- Unit Testing
- Mocking API Calls

---

## API Used

GitHub REST API

```
https://api.github.com/users/{username}/repos
```

Example:

```
https://api.github.com/users/Allen-Ronaldo-C/repos
```

---

## Project Structure

```text
gitclientapp
├── public
├── src
│   ├── App.js
│   ├── App.css
│   ├── GitClient.js
│   ├── GitClient.test.js
│   ├── index.js
│   ├── index.css
│   └── setupTests.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd gitclientapp
```

Install dependencies

```bash
npm install
```

Install Axios

```bash
npm install axios
```

---

## Run the Application

```bash
npm start
```

The application will start at:

```
http://localhost:3000
```

---

## Run Unit Tests

```bash
npm test
```

The unit tests verify that:

- Axios is mocked successfully.
- GitClient returns mocked repository data.
- The correct GitHub API URL is called.

---

## Output

The application displays:

- Git repositories of the specified GitHub user.
- Repository names fetched from the GitHub REST API.

Example:

```
Git repositories of User - Allen-Ronaldo-C

Portfolio
LifeLink
Election-Assistant-AI
Weather-App
Netflix-Clone
SmartPath
...
```

---

## Learning Outcomes

- Working with REST APIs in React
- Using Axios for HTTP requests
- Managing asynchronous operations with Promises
- Using React Hooks
- Writing unit tests using Jest
- Mocking HTTP requests with Axios

---

## Result

Successfully developed a React application that retrieves GitHub repositories using Axios and displays repository names dynamically. The API service was tested independently using Jest by mocking Axios responses, ensuring reliable and isolated unit testing.