# Geterdone (an efficient to-do app for Entrepreneurs)

### Built with React + Vite + mongodb + Prisma

##### Most Todo list give the user anxiety. they are good for listing out what needs to be done but they come with the drawback of becoming a list of stressful things needed to get done and if you dont get them done you feel even more stressed and unproductive They tend to become a place to dumb task into, feeding into procrastiantion on the imortant tasks, making the user feel they have accomplished alot when they have not.  A to-do list should aid in achieving your goals, not be a means of procrastinating & stress.


## User Stories 
- A user should be able to add the goal
- a user should be able to list out each step to achieve that 
- a user should be able to list out each step to achive that step
- a user should be reminded to keep so they may stay on track
- a user should be able to see the past achived goals
- a user should be able to CRUD goals.

## MVP Features
- Pages: login page, user profile, Goal, Paths (A)
- takes large goals and breaks them down into steps, and breaks down steps into tiptoes(B)
    - Gives you no more than 1 step, with five tiptoes at a time.
    - Only gives more tiptos once all five are done.
    - steps, tiptoes, and goals have emoji icons by them.
    - tippost have a 10 word limit
    - seps have a 5 word limit
    - Goals have a 3-word limit.
- notifications for each tiptoe, step, and goal completed (C)
- Keep a list of all completed goals as paths. (D)
    - You complete a goal, you can then name the path.

![alt](https://excalidraw.com/#json=oUBzf2HlToVc8nRTZxPSr,8_6YT-FSlYb92CqE73wHiQ)

## Why React + Vite
I chose React primarily because I have been developing in React since the start of my career, so I chose it mainly out of comfort. However, the declarative nature of React also makes component composition intuitive, allowing for greater clarity of thought when developing. I chose Vite because it's currently the industry standard, and it pairs well with React Router, which I am using to handle routing in my application.

## Why Node + Express 
I chose Node because I wanted my back end to also be in JavaScript, reducing the headache of having a different language for the backend. Express pairs very well with Node.js, extending its functionality while also simplifying some of its features.

## why MongoDB + Mongoos
I chose MongoDB out of preference for non-relational databases. I chose Mongoos over Prisma for its being designed to be used with MongoDB and the fact that it has been around for a long time, making finding articles and resources easier. 


## Folder structure 
public/, server/, and src/.

public/ vite.svg

server/  config/ (config.js, database.js), controllers/, middleware/, models/ (goal.js, notification.js, path.js, user.js), routes/ (auth.js, goals.js, health.js, index.js, users.js), and server.js.

src/ contains App.css, App.jsx, main.css, main.jsx, assets/react.svg, context/ (AuthContext.jsx, UiContext.jsx), and components/ (Goals.jsx, Home.jsx, Journeys.jsx, Login.jsx, Paths.jsx, Profile.jsx, ProtectedRoute.jsx, Signup.jsx).

## MVP scope
-  user account
-  add the goal
-  list out each step to achieve that 
-  notification remindeds
-  notification for completing goals
-  see the past completed goals
-  able to CRUD incomleted goals.

## Future features (v2 ideas)
-  Goal leader boards 
-  Points for completing goals
-  Sharable paths & goals 
-  Goal colaberations (work with others to comlete steps in a goal)
-  Goal groups (goups of user with a similar goal in mind)