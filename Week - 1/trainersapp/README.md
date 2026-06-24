# Week 1 - Trainers App

## Objective

To understand and implement routing in React applications using React Router DOM.

## Features

* Navigation using React Router.
* Home Page.
* Trainers List Page.
* Trainer Details Page.
* URL Parameter Passing using `useParams()`.
* Dynamic rendering of trainer details based on selected trainer.

## Technologies Used

* React JS
* React Router DOM
* JavaScript
* HTML5
* CSS3

## Project Structure

```text
trainersapp
├── src
│   ├── App.js
│   ├── Home.js
│   ├── Trainer.js
│   ├── TrainersMock.js
│   ├── TrainersList.js
│   ├── TrainerDetails.js
│   └── index.js
├── public
├── package.json
├── package-lock.json
└── README.md
```

## Routing Implemented

| Route        | Description     |
| ------------ | --------------- |
| /            | Home Page       |
| /trainers    | Trainers List   |
| /trainer/:id | Trainer Details |

## Functionalities

### Home Page

Displays the welcome message for the Trainers Application.

### Trainers List

Displays all trainers as clickable hyperlinks.

### Trainer Details

Displays:

* Trainer Name
* Technology
* Email
* Phone Number
* Skills

based on the selected trainer ID passed through the URL.

## Output

### Home Page

![trainersapp/Screenshot 2026-06-24 165913.png](<Screenshot 2026-06-24 165913.png>)

### Trainers List

![trainersapp/Screenshot 2026-06-24 165923.png](<Screenshot 2026-06-24 165923.png>)

### Trainer Details

![trainersapp/Screenshot 2026-06-24 165932.png](<Screenshot 2026-06-24 165932.png>)

## Result

Successfully implemented navigation and routing in a React Single Page Application using React Router DOM. The application supports route-based navigation and dynamic parameter passing through URLs to display trainer-specific information.
