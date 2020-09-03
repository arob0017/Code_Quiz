# Code_Quiz

Using mainly javascript I have created a multiple choice quiz about javascript. I have done this by:
  1. Creating an array of questions, with an array of choices and answers
  2. When the start button is clicked, the intro page is displayed as "none" and then the questions begin along with a countdown timer. If the user chooses a choice      which is not correct, 10 seconds is deducted from amount of time left. Questions are displayed one by one through a loop. 
  3. When the timer countdown is at 0 or if all questions have been answered, the All Done page is displayed. Users score is then displayed and users are asked to        input their initials.
  4. When users submit their initials, they are directed to the "score-history" page which is a scoreboard showing their highscores. This has been done by using the     localStorage property. I then create an elemtent in javascript that will show users initals and socre. 
  5. If users click the "go back" button they are directed to original home page which is what the website displays when it is first loaded. If user clicks the         start quiz button again, the timer resets along with question index.  
  6. If users click the "clear history" button, then all highscore history is cleared from the page.
<br> https://arob0017.github.io/Code_Quiz/ <br>

<div align="centre">
    <img src="https://github.com/arob0017/Code_Quiz/blob/master/screenshots/Start%20Page.png" width="400px"</img> 
</div>
<div align="centre">
    <img src="https://github.com/arob0017/Code_Quiz/blob/master/screenshots/highscores%20-%20play%20game%20first.png" width="400px"</img> 
</div>
<div align="centre">
    <img src="https://github.com/arob0017/Code_Quiz/blob/master/screenshots/Questions.png" width="400px"</img> 
</div>
<div align="centre">
    <img src="https://github.com/arob0017/Code_Quiz/blob/master/screenshots/All%20Done.png" width="400px"</img> 
</div>
