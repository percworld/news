## Paperbot

A [Front-End Challenge](https://github.com/turingschool-examples/mod4-tech-challenges/blob/main/take-homes/fe-take-home.md) by [Chuck Morris](https://github.com/percworld).



### Overview
This technical take-home challenge, a preparatory [Turing School of Software and Design](https://turing.io/) challenge, will demonstrate my learnings of JavaScript, React and HTML/CSS during my time at Turing. Cypress testing will be used to do end-to-end testing of the application.  The New York Times API will be consumed and is available here: https://developer.nytimes.com/docs/top-stories-product/1/overview
This challenge is meant to be completed in 6 hours.

### Endpoints:
Top stories will be searched by query parameters. URIs are relative to https://api.nytimes.com/svc/topstories/v2/{section}.json

The possible section values are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world.

### Planning Resources
* [GitHub Project Board](https://github.com/percworld/news/projects/1)
* User Persona
I believe a user persona detail can help determine the user experience beforehand and prepare our project with a base for moving forward with wireframing.  
![User Persona 1](https://user-images.githubusercontent.com/71858456/120398647-dfa86d80-c2f7-11eb-9039-a276cdac0e79.png)

### Technologies used:
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="Cypress" src='https://img.shields.io/badge/cypress%20-%23404d59.svg?&style=for-the-badge&logo=Cypress&logoColor=white'/>

### Setup Instructions:
Clone down this repository to your local machine~
In Console run:
1. ```git clone https://github.com/percworld/news.git```

CD into the new directory:

2. ```cd news```

Then install the library dependencies by running:

3. ```npm i```

Now you can start by running:

4. ```npm start```

If you see `Compiled successfully!` in your terminal, the application is running and the app can be veiwed at `http://localhost:3000/` in your browser.



---


## Features
* Browse the New York Times headlines and top stories
* Filter the stories by current interest by clicking within a tag's box
* Get a detailed view of a story by clicking it anywhere in it's section
* Click the back arrow to return to headlines and continue browsing
---

## Future Iteration:
In consideration of different users' preferences, the tag filtering method is prepped to include multiple tags though this is uncalled for in the MVP.  In order to achieve this functionality, there are two steps involved:
1.  Enable listing of multiple requests stored in an array using state in the Articles component.
2.  Make sure to change this map on line 11 of Tagbar.js from
```const tempActive = isActive.map(tag => false);``` to ```const tempActive = isActive;```  
This will enable multiple tags quite simply and the tags may be clicked off if no longer desired in the filtering.

## Wins
It was enjoyable to practice some React programming with this app, and it was begun as a challenge to myself to not look at other projects and paste code.  It was revealing how much I have learned in the last two mods that this was possible and I achieved my own reward of a job done from scratch without any hints.  It helped to solidify the concepts of programming in a React environment. Also, a big win for me was not having an intensive stretch tech that I was undertaking for a project. In this way, I allowed myself to take a step out of the ordinary in other chosen ways.  One of these was determining a way to make boxes ('tags') selectable and operational for mulitple choices without using a field element and radio buttons.  It turned out to be a bit of a headache but I was eventually successful, though I believe the method of a field tag with radio tags is simpler, operates faster, and is much more developer friendly.  However, it was a challenge worth undertaking to see if it was possible. I'm glad I did, because it allows me to potentially include this knowledge in future projects.
