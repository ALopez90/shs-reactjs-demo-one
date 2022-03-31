import React, { useState } from 'react';
import Board from './components/Board';
import './styles/app.scss';
import { whoIsTheWinner } from './Logic';
import Messages from './components/Messages';

const App = () => {
  //What happens when a change occurs?
  //Initialization of the arrays and setting another usestate for the second player move
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  // Used to determine the winner!
  const { winner, winningSquare } = whoIsTheWinner(board);

  //This event handles the position of the square clicked
  const handleSquareEvent = position => {
    //Is the square ready to be clicked?
    if (board[position] || winner) {
      return;
    }

    // To map the square with values
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });

    // Alternation of the values
    setIsNext(prev => !prev);
  };

  return (
    // The actual game itself :) What the user sees!
    <div className="app">
      <h1> TIC <span className="text-purple">TAC</span> TOE</h1>
      <Messages winner={winner} board={board} isXNext={isXNext} />
      <Board
        board={board}
        handleSquareEvent={handleSquareEvent}
        winningSquare={winningSquare}
      />
      {/* Reset button */}
      <button
        onClick={() => window.location.reload(false)}
        className={`btn-reset ${winner ? 'active' : ' '}`}
      >
        Reset the game !
      </button>
      {/* Background squares that turn into circles as they go to the top */}
      <ul class="squares">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
    </div>
  );
};

export default App;
