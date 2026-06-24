# Week 1 - Cohort Tracker

## Objective

To understand and implement styling in React components using:

* CSS Modules
* Inline Styling
* Conditional Styling

## Features

* Display cohort details using React components.
* Style components using CSS Modules.
* Apply styles using `className`.
* Apply dynamic inline styling based on cohort status.
* Display ongoing cohorts in **green** color.
* Display completed cohorts in **blue** color.

## Technologies Used

* React JS
* JavaScript
* CSS Modules
* HTML5

## Project Structure

```text
cohorttracker
├── src
│   ├── Cohort.js
│   ├── CohortDetails.js
│   ├── CohortDetails.module.css
│   ├── App.js
│   └── index.js
├── public
├── package.json
└── README.md
```

## Styling Implemented

### CSS Module

```css
.box {
    width: 300px;
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 10px;
}
```

### Dynamic Styling

* Green color for **Ongoing** cohorts.
* Blue color for **Completed** cohorts.

## Output

![alt text](<Screenshot 2026-06-24 120654.png>)

## Result

Successfully implemented React component styling using CSS Modules and inline conditional styling to display cohort information in a visually structured dashboard.
