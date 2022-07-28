**Spock - Rock - Lizard - Scissors - Paper**


Spock - Rock - Lizard - Scissors - Paper is a fun game site that has been created to help kids (and anyone else that like the show "The Big Bang Theory") to have a little fun and pass the time. This is a one-person game where the user is set against the computer, which has affectionally been given the name and personality traits of "Sheldon Cooper" (one of the main characters in the hit tv series). The game is a modern twist (based on Sheldon Cooper's concept) of the original folk Rochambeau game most known as: rock-paper-scissors. The twist is adding two more hand shape possibilities to statistically reduce the possibilities of the players choosing the same hand shape resulting in a draw. This program is set to be a "Best of 9" series so the first competitor to be victorious 5 times is the winner of the series.

The value of this game is focused on its ease of use, its accessibility and that it is fun and entertaining. The game is fairly simple and takes minimal skill to play as each round (especially when played against a computer) as it is more a game of chance than skill. Therefore, its the perfect game to entertain children and occasionally, fans of the show. 

This image shows the website responsivity to screen size:

![Screenshot of the resonsive website](/assets/images/responive.webp)



**Features of site:** 

Although this site features one main page (which is completely responsive to fit on to any screen size) there are many areas on the page each providing interactive opportunities for the user. There is a navigation bar above the Title header, there is a picture description showing which hand formation beats another hand formation. Below the picture there are 5 buttons, one for each of the hand shapes. All the player must do is pick which hand shape they think will win against 'Sheldon' the computer. The results section displays how the game played out. Finally, there is a "Play Again" button to start the game over as well as links to other fun games in the footer section.

**The Navigation Bar and Page Title**



![Screenshot of the Nav bar and Title](/assets/images/nav-bar-heading.webp)

In the Navigation Bar, there are three links. The "Play the Game" link is an internal link which brings the user down to the "Game area" of the page. The second link is an external link which allows the user to navigate to a "Big Bang Theory" fan page which details the rules of the game in words: (https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/#:~:text=As%20Sheldon%20explains%2C%20%22Scissors%20cuts,has%2C%20rock%20crushes%20scissors.%22) The thrid and final link is an internal link that brings the user to the bottom of the page where there are 5 external links to other gaming sites.

The Title of the Game is featured in the center of the page so that the user knows what game they are invited to play.



**The Rules of the Game:** 

![Screenshot of the Rules of the game in picture form](/assets/images/game-rules.webp)

Fixed in the center of the page is a pictorial description for the rules of the game. Arrows indicate which hand formations win or lose against other hand formations. The pictures accurately show the hand formations that could be used if the player wanted to play the game in real life. Although the picture is detailed and descriptive for the rules of the game, there is also a link in the navigation bar to a website what writes out the rules (if a user would prefer to see it in text form).



**The Game Area:**

![Screenshot of the Game area where the action takes place](/assets/images/game-area.webp)

This is the main area of activity for the user to interact with the program. There are five main buttons that the player can choose from, each button represents one of the possible hand formations. The buttons are interactive in that they change color when they are pressed. When the player chooses a hand shape, the game begins! Instantly the computer, “Sheldon", makes its choice and the result of the game is displayed in the results section. The scoreboard shows who the victor is simultaneously. The results area displays the outcome of each selection made by the player and the scoreboard shows a running tally for the series.

When a player reaches five victories an alert shows a message as to who won the series; When this alert message shows and the user clicks "ok" on the alert, the game is reset to play again.

At the bottom of the game area there is a "Play Again" button in case the user is dismayed with their score and they would prefer to start again, rather than to lose to Sheldon.



**The Footer Area**

![Screenshot of the footer area links](/assets/images/footer-links.webp)

The footer area contains five external links to other websites. Four out of the five of these links will take the user to alternate websites that have games on similar interactive levels; the fifth link (the middle link) brings the user to a game site hub with hundreds of gaming choices. 



**Inactivity Alert Feature**

![Screenshot of the inactivity alert](/assets/images/idle-prompt.webp)

This alert is a prompt that invokes the user to engage with the program. In the case of inactivity, this alert prompt is an function designed to draw the user back into the program, to produce a valid response.



**Future features to include:**

1. In the future I would like to make it possible to have the game have a second player option so that more than one person can enjoy the game.

2. In the future, I would like to add more animations to this site, for example: flashing results response areas, appearing countdown timers between choice selections, etc.  

3. Also, I think that it would be good to link this game with a series of other kid friendly games of similar skill levels, such as Tic-Tac-Toe, etc.



**Testing methods and results:**

1. Using [w3](https://validator.w3.org/), each page was tested repeatedly to track and debug errors in the code, until all errors were eliminated in all pages of the code.
![Screenshot of the html validation test](/assets/images/html-validation.webp)

2. Using [jigsaw.w3](https://jigsaw.w3.org/css-validator/validator), the css stylesheet was tested to track errors and debugged until there are no errors in the code.
![Screenshot of the css validation test](/assets/images/css-validation.webp)

3.  [JSHint](https://jshint.com/) was used to validate and provide methods to debug the Javascript code.
![Screenshot of the JavaScript validation test](/assets/images/js-validation.webp)

4. Using Chrome Dev Tools to trouble shoot and test all pages repeatedly to track and debug the code for all the pages. Lighthouse was used to test the performance and accessibility of the site
![Screenshot of the lighthouse validation test](/assets/images/lighthouse-validation.webp)



**Design Process Bugs:**

1.  There were significant bugs involved in the "Compare" function
Multiple attempts were made to develop a function that took in the players choice and compare it against a randomly chosen computer choice and base the comparison against the rules of the game. During the development process, numerous different approaches were explored to make this function work wihtout issues; eventually a method to accomplish the goal was discovered and the main function of the game works efficiently and smoothly. 

2.  The increment score functions for the score board created significant issues. A lot of trial-and-error attempts went through the process of discovering the way to have the scoreboard represent the outcome of each comparison of the player choice and the computer choice.

3.  There were significant issues surrounding the reset function that ends the game when a player reaches a certain threshold as well as clearing the scoreboard and results area. 


**Unfixed bugs:**

As of now, there is only one "glitch", when the game resets, the results are does not clen out and the results of the last game are still present. It does not affect the game and there are no error codes thrown, I would just prefer that the results section clear out to an empty field to start fresh. 


**Deployment:**

The site was built and deployed to [GitHub pages] (https://pages.github.com/). The steps to deploy are as follows:

Enter the GitHub repository.

Navigate to the Settings tab, then selecting the 'pages link on the left side link section. selecting the source section in the drop tab, select the Master Branch.

Once the master branch has been selected, the page will be automatically refreshed with a detailed green ribbon display to indicate the successful deployment.



**Media Credits:**

1. Hero image came from Tony Florida.com "Rock paper scissors lizard Spock rules"



**Code credits:**s

1. I heavily used the Code Institutes "Love Maths" project example as the main source of inspiration for the main page set up, button setting, css styling, and JS coding (run game function, incremental scoring, game area arguments, event listeners and reset function. 

2. Code Institutes "Love Running" was used for some css styling assistance as well as for assistance with hover styling and media queries. I referenced my previous project "Bombers Baseball" for assistance with the nav bar links and footer links. I also cross referenced the Code Institute projects "Love Running" and "Love Maths" for styling attributes

3. Learners Bucket.com/tutorials used for code/inspiration and assistance with Javascript code for the game area arguments, the incremental scoring, event listeners and reset function: (https://learnersbucket.com/tutorials/js-projects/rock-paper-scissor-lizard-spock-game-in-javascript/)

4. Sebhastian.com/rock-paper-scissors-JavaScript used for inspiration and assistance with JavaScript code for the game area arguments, the incremental scoring, event listeners and reset function: (https://sebhastian.com/rock-paper-scissors-javascript/)

5. This page was used for assistance/guidance for the compare function arguments:
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

6. Geeks for Geeks was used for code/inspiration and assistance with JavaScript code for the compare function, the incremental scoring functions, event listeners and reset function:
(https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/)

7. This page in Stack Overflow was heavily used to help debug the players choice buttons and to get them to work with the compare and increment functions: 
(https://stackoverflow.com/questions/36632749/using-onclick-with-multiple-buttons-with-javascript)

8. This page: (https://codepen.io/763004/pen/pPGGyP) was extensively used as reference, inspiration and guidance for the JavaScript 'if -else' compare function as well as the computer choice function. I did use lines of code directly/indirectly from this page for the compare and computer choice functions. This page became a 'reference point' of functionality during the process of working on my project. 

9. This page from w3schools was heavily used to help debug the victory and reset functions as well as and to get them to work with the compare and increment functions: 
(https://www.w3schools.com/js/js_functions.asp)

10. This page from freecodecamp was heavily used to help debug the issues I was experiencing with event listeners on all functions:
 (https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/)

11. (https://www.stackoverflow.com/questions/66755/how-to-detect-idle-time-in-javascript) was used as inspiration for/borrowed code from to create an idle timer of inactivity to prompt the player to interact with the game with valid input.


