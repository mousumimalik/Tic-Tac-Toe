import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

// gameView.updateBoard(game);

// console.log(game.board)

// console.log("My turn is ", game.turn);

// game.nextTurn();
// console.log("My turn is ", game.turn);

// game.makeMove(3);
// console.log(game.board);

// game.nextTurn();
// game.makeMove(8);
// console.log(game.board);

// gameView.updateBoard(game);

document.querySelector(".restart")
.addEventListener("click", () => {
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        // console.log("Tiles clicked");
        // console.log(tile.CDATA_SECTION_NODE.index);
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i) {
    // make a move 
    game.makeMove(i);
    // update board 
    gameView.updateBoard(game);
    // change turn move
    // game.nextTurn();
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);
