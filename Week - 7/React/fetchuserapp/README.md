# Week 3 - Fetch User App

## Objective

To understand asynchronous programming in React by retrieving user information from an external REST API using the Fetch API and displaying the data in a React component.

## Features

- Fetch user details from the Random User API.
- Display the user's title, first name, and last name.
- Display the user's profile picture.
- Show a loading message while the data is being fetched.
- Use the React lifecycle method `componentDidMount()`.

## Technologies Used

- React JS
- JavaScript (ES6)
- HTML5
- CSS3
- Fetch API

## React Concepts Covered

- Class Components
- State Management
- Lifecycle Methods
- componentDidMount()
- Async/Await
- Fetch API
- Conditional Rendering

## API Used

https://api.randomuser.me/

## Project Structure

```text
fetchuserapp
├── src
│   ├── App.js
│   ├── Getuser.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── public
├── package.json
└── README.md
```

## Output

### User Details

![fetchuserapp/Screenshot 2026-07-02 202620.png](<Screenshot 2026-07-02 202620.png>)

## Result

Successfully implemented a React application that retrieves user details from the Random User API using the Fetch API. The application asynchronously fetches data in the `componentDidMount()` lifecycle method and displays the user's name and profile picture after loading.