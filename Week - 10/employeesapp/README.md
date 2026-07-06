# Week 3 - Employees App (React Context API)

## Objective

To understand and implement the React Context API by eliminating prop drilling and sharing theme information across components.

## Features

- Display a list of employees.
- Change the application theme using a dropdown.
- Use React Context API to pass the selected theme.
- Avoid prop drilling by accessing the theme directly using `useContext()`.
- Apply different styles for Light and Dark themes.

## Technologies Used

- React JS
- JavaScript (ES6)
- HTML5
- CSS3

## React Concepts Covered

- Context API
- createContext()
- Context Provider
- useContext() Hook
- Functional Components
- State Management using useState()
- CSS Modules

## Project Structure

```text
employeesapp
├── src
│   ├── App.js
│   ├── App.css
│   ├── Employee.js
│   ├── EmployeesList.js
│   ├── EmployeeCard.js
│   ├── EmployeeCard.module.css
│   ├── ThemeContext.js
│   ├── index.js
│   └── index.css
│
├── public
├── package.json
└── README.md
```

## How It Works

1. The application initializes the theme as **Light**.
2. The selected theme is provided to all child components using **ThemeContext.Provider**.
3. The `EmployeeCard` component accesses the theme using the **useContext()** hook.
4. Employee action buttons automatically change their appearance based on the selected theme.

## React Context Flow

```text
App
│
├── ThemeContext.Provider
│
└── EmployeesList
      │
      └── EmployeeCard
             │
             └── useContext(ThemeContext)
```

## Output

### Light Theme

![alt text](<Screenshot 2026-07-02 001024-1.png>)

### Dark Theme

![alt text](<Screenshot 2026-07-02 001122-1.png>)

## Result

Successfully implemented the React Context API to share theme data across multiple components without prop drilling. The application dynamically updates the UI based on the selected theme using the `useContext()` hook.