# 💪 FitLog — Workout Library

FitLog is a modern workout library web application where users can explore workouts, view detailed workout information, save workouts for later, and create a personal workout plan.


## 🛠️ Technologies Used

* Next.js
* TypeScript
* Tailwind CSS
* React Context API
* React Hot Toast
* REST API
* LocalStorage

## ✨ Features

* 🏋️ Browse 12 workouts from the FitLog API
* 🔎 Search workouts by name or muscle group
* ↕️ Sort workouts by duration, calories, or rating
* 📋 Add workouts to today's plan
* 💾 Save workouts for later
* 🔢 Maximum 5 workouts in today's plan
* 📊 Automatic exercise, duration, and calorie metrics
* ✅ Mark planned workouts as completed
* ❌ Remove workouts from the plan or saved list
* 🔔 Toast notifications for user actions
* 💽 LocalStorage persistence
* 📱 Fully responsive design
* 🚫 Custom 404 page

## 📌 Pages

### Home

The home page contains:

* Navbar
* Hero section
* Workout library
* Search
* Sort
* Workout cards
* Footer

### Workout Details

Each workout has:

* Large workout image
* Workout name
* Description
* Muscle groups
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Instructions
* Add to Today's Plan
* Save for Later

### My Plan

The My Plan page contains:

* Today's Plan
* Saved Workouts
* Exercise count
* Total minutes
* Total calories
* Sort options
* Mark as Done
* Remove workout
* View Details

## 🔗 API

FitLog uses the following REST API:

```text
https://api.abcz.workers.dev/api/fitlog
```

Single workout:

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

## 📁 Project Structure

```text
fit-log/
│
├── public/
│   ├── logo.png
│   └── banner.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── my-plan/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── WorkoutLibrary.tsx
│   │   └── Footer.tsx
│   │
│   ├── context/
│   │   └── PlanContext.tsx
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── utils/
│       └── api.ts
│
├── package.json
├── README.md
└── ...
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project folder:

```bash
cd fit-log
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📱 Responsive Design

FitLog is designed for:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

## 🎯 Assignment Highlights

* Next.js App Router
* TypeScript
* Tailwind CSS
* REST API integration
* Shared state with Context API
* Dynamic workout routes
* LocalStorage persistence
* Responsive UI
* Search and sorting
* Toast notifications

## 👨‍💻 Author

Md. Asraful Islam

CSE Student | Aspiring Full-Stack Developer
