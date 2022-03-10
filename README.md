# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kian Fabian Ranjbar**

Time spent: **7** hours spent in total

Link to project: (https://dorian-sharp-room.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] Button indicators appear when clue sequence is playing versus when it's the user's turn to copy the pattern

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x](https://i.imgur.com/Je5h9E1.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/tags/tag_meta.asp#:~:text=The%20tag%20defines%20metadata,the%20document%2C%20and%20viewport%20settings
https://careerkarma.com/blog/javascript-array-length/#:~:text=To%20find%20the%20length%20of,length%20property%20returns%20an%20integer
https://www.geeksforgeeks.org/how-to-change-an-input-button-image-using-css/#:~:text=The%20default%20button%20in%20HTML,show%20only%20the%20image%20itself
https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
https://www.richardcastera.com/blog/javascript-passing-multiple-parameters-through-settimeout/
https://www.programiz.com/javascript/comparison-logical
https://www.permadi.com/tutorial/jsInnerHTMLDOM/index.html


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
**One thing right from the beginning was learning these 3 languages without having any prior knowledge. This forced me to slow down, and read through all the collapsable drop downs plus more (through websites) to get a better understanding of how and more importantly why certain things were happening in the code. Furthermore, since the files that were given were a bit different than the project write up, I had to carefully read what lines of code I definitely could delete versus other lines that were critical to the program and needed to stay. I used two approaches for this: 1) I looked up the keywords and checked if websites claimed it to be "absolutely necessary" and 2) I experimented with the website by deleting some things and if I noticed they went wrong, Control Z. Another slight struggle was coordinating all the timing with setTimeout while implementing additional optional features to the game. This is because unlike Python's "sleep" helper function, JavaScript's "setTimeout" simply puts a delay on the functions to call BUT continues executing other code that doesn't depend on it. Another fun challenge was figuring out how to randomly generate random patterns with the third party libraries from javascript and using arrays that I have never done before in this language. I was able to look up websites that helped me see the syntax and methods to do what I wanted to do everytime a new game started. Another challenge was changing the "timer" button because unlike our other buttons, it changed on time and no actual "events" that occurred so I looked up some websites to help me get the information I needed. This allowed me to use recursion to solve the problem in case the user guessed all the tiles necessary before the timer was up.** 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
**One far-fetched question I have is how these three languages work together fluidly and how they know where to format certain buttons, paragraphs, etc. Also, I am still curious as to how to format things exactly the way you want them to rather than the defaults because I want to learn how to make my own personal website and be able to format it uniquely! I would love to learn more html as this is my first interaction with it and I had a lot of fun. Also, integrating other files such as videos, gifs, etc. into a website rather than just pictures is something I am curious on how to do. Furthermore, since we left it out in this project and did not explore it too much, I still am very curious on how to write a website with hyperlinks to other pages and smooth navigation for ease of user.**

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
**First of all, I would give more options on how to play the game. For example, before you start the game, you could instead perhaps choose a "difficulty" with easy, medium, and hard being options, and they all vary in the length of the patterns (easy can be 4 tiles while hard can be 12 tiles in a row). Also, for easy I wouldn't speed up the tiles, but for hard maybe I would speed it up as well as have it start with smaller initial holdClue count. Furthermore, I would try to organize the code in the js a bit more so I could achiever low coupling and high cohesion in functions. I would also research to see how I can integrate multiple .js files together because if a game starts to become very complicated (say perhaps adding difficulty levels), then the file may grow too much to the point where the code is not readable / organized. Another thing I would like doing is making the website more organized and professional with not so tacky-looking buttons and fonts. Lastly, I would really try to get a good understanding of how the audio snippet of code works together.**


## Interview Recording URL Link

[My 5-minute Interview Recording](https://vimeo.com/686507713)


## License

    Copyright Kian Fabian Ranjbar

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.