<p align="center">
  
</p>
&nbsp; 

<p align="center">
  <img src="https://img.shields.io/badge/-Reactjs-fafafa?style=for-the-badge&logo=react&logoColor=blue" alt="Reactjs" height="35">
  &nbsp; &nbsp; 
  <img src="https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3" alt="CSS" height="35">
  &nbsp; &nbsp; 
  <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript" alt="Javascript" height="35">
</p>

# Tic Tac Toe Game
A two players tic-tac-toe game created using react and session storage database.

## About Project
Online tic-tac-toe game website with scoreboard for win, loss and draw.

## Development Insights
This project uses React framework and session storage for scoreboard.

### Components

#### Board Component
Main component where actual game board is displayed and each slot of game is rendered independently to provide selection of any slot for any turn easily.

#### Slot Partial
This is a small yet important dynamic child part of it's parent Board Component. This partial component is use to provide easy random choice for player's tic as its creates an individual slot which doesn't depend on each other but on parent for all prop values like winner state.

#### MarkType Component
To use svg circles and cross for tic marks in game and all around easily; I created this jsx template where I can easily just render the required svg by passing its name as prop. Additional perk is its Highly easy to maintain any type svg icons in react project.

#### Modal Component
Modal Component using create react portal to show the result of each match with action choice to restart or play another round.

### Custom Hooks

#### Session Storage Hook
I created this hook to easily store value in session storage without declaring each time session storage in different Components. It helps to store the state values easily and you can easily change them too.

#### Mount Transition Hook
Simply it is only for to add little delay to anything. It is Specificly used here to show modal transitions.
