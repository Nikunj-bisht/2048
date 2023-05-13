# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

To install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `how to play`

Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Grid Representation: The game is typically implemented using a two-dimensional array or matrix to represent the grid. Each element of the array corresponds to a tile on the grid, with its value representing the number on the tile.

Initial Setup: At the start of the game, two random tiles (either 2 or 4) are placed on the grid. These tiles are usually positioned in random empty cells.

User Input: The game allows the player to make moves in four directions: up, down, left, or right. This can be done using arrow keys, swipe gestures (in mobile versions), or similar controls. The player's input triggers the corresponding movement of the tiles on the grid.

Tile Movement: When the player makes a move, the tiles on the grid slide as far as possible in the selected direction. If two tiles with the same number collide during this movement, they merge into a single tile with the sum of their values. After each move, a new tile (usually 2) is randomly generated and placed on an empty cell.

Game Over: The game continues until one of the following conditions is met:

The player reaches the 2048 tile, resulting in a win.
There are no possible moves left, meaning the grid is full and no adjacent tiles can be combined. This results in a game over.
Scoring: The player's score increases each time two tiles are merged. The score can be displayed on the screen to keep track of the player's progress.

### Deployment

The game has been deployed to vercel - (https://2048-oguh.vercel.app/)


