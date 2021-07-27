# Project Overview

## Potterology

[Deployed Project](https://potterology-ashley-sands.netlify.app)

## Project Description

This project allows for users to immerse themselves in the Wizarding World. The project will append information (directory) about various characters and places in the Harry Potter universe. Users will also be able to "travel around" to different places and take quizzes at each location, "purchase" items from various magical stores, and post messages for others to see in two different locations.

## Wireframes

![Wireframe](https://i.imgur.com/q35YFMl.png)

## Component Hierarchy
![Component Hierarchy](https://i.imgur.com/WcswmcU.png)

## API and Data Sample

I am creating my own API using Airtable. [API](API)


```
{
    "records": [
        {
            "id": "recMUuMUGpSxqkp6G",
            "fields": {
                "name": "Harry Potter",
                "house": "Gryffindor",
                "boggart": "Dementor",
                "patronus": "Stag"
            },
            "createdTime": "2021-07-13T13:05:55.000Z"
        },
        {
            "id": "recPoWs4N3qn0b7NJ",
            "fields": {
                "name": "Hermione Granger",
                "house": "Gryffindor",
                "boggart": "Failure",
                "patronus": "Otter"
            },
            "createdTime": "2021-07-13T13:05:55.000Z"
        },
        {
            "id": "recZTyIOf6gceTSnz",
            "fields": {
                "name": "Ron Weasley",
                "house": "Gryffindor",
                "boggart": "Aragog",
                "patronus": "Jack Russel terrier"
            },
            "createdTime": "2021-07-13T13:05:55.000Z"
        }
    ],
    "offset": "recZTyIOf6gceTSnz"
        },
```



### MVP/PostMVP

#### MVP 

- Allow user to search with a form input to find information about different characters and places
- Create three quizzes, one for each major location (Diagon Alley, Hogwarts, Hogsmeade)
- Allow users to post a message to the page in the Owl Post
- Styling with flexbox
- Media query for mobile


#### PostMVP  

- Allow students to take money out of Gringotts bank and buy a wand, pet, and school books 
- Create a potions game where users have to use the correct ingredients in order to create a successful potion
- Allow users to buy books and potions (from the same store) with money withdrawn from Gringotts
- Create new location (The Three Broomsticks) and have a random recipe generator

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project approval / all components created (not completed) / create quizzes | Complete
|July 14| Style quizzes / style Hogwarts, Hogsmeade, and Diagon Alley components   | Complete
|July 15| Add JS to Tom Riddles Diary and style with css | Complete
|July 16| continue styling already created components with css / start working on PMVP | Complete
|July 17| Initial Clickable Model / Additional CSS: hover effects,  animations / work on mobile UI | Complete
|July 18| Continue styling with CSS| Complete
|July 19| MVP | Complete
|July 20| Presentations | Complete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create all components - basic set-up (MVP only) | H |3hrs| 1hr | 1hr |
| Create all quizzes | H | 1hr| 4hrs | 4hrs |
| Create potions game | H | 1hr| 1.5hr | 1.5hrs |
| basic styling for quizzes | H | 2hrs| 4hrs | 4hrs |
| basic styling for potions game | H | 2hrs| 3hrs | 3hrs |
| style hogwarts / hogsmeade / diagon alley components | H | 3hrs| 6hrs | 6hrs |
| basic JS for tom riddles diary | H | 2hrs| 2hrs | 2hrs |
| style tom riddles diary | H | 3hrs| 4hrs | 4hrs |
| create directory | H | 3hrs| 3hrs | 3hrs |
| create API in Airtable | H | 4hrs| 6.5hrs | 6.5hrs |
| query for mobile | H | 6hrs| 2hrs | 2hrs |
| additional css styling | H | 5hrs| 6hrs | 6hrs |
| Total |  | 34hrs| 43hrs | 43hrs |

## SWOT Analysis

### Strengths:
My ability to Google information and implement it.

### Weaknesses:
CSS styling 

### Opportunities:
Learning about making a shopping cart feature and about local storage

### Threats:
Time

## Change Log
Instead of having a random recipe generator, I thought it made more sense for users to be able to buy food of their choosing from one of the shops. It made more sense with the theme of the website.
