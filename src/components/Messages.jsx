import React from 'react';

const Messages = ({ winner, board, isXNext }) => {
  // Iterate through the moves (noMoves is set to be true at the start)
  const noMoves = board.every(el => el !== null);

  return (
    <div className="status-message">
      {/* //Condition 1: There's a winner! */}
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-blue' : 'text-purple'}>
            {winner}
          </span>
        </>
      )}
      {/* //Condition 2 : No winner & there's still a chance for more moves! */}
      {!winner && !noMoves && (
        <>
          Next player is{' '}
          <span className={isXNext ? 'text-blue' : 'text-purple'}>
            {isXNext ? 'X' : ' O'}
          </span>
        </>
      )}
      {/* //Condition 3 : No winners & no moves left */}
      {!winner && noMoves && (
        <>
          <span className="text-blue">X</span> and{' '}
          <span className="text-purple">O</span> are tied!
        </>
      )}
    </div>
  );
};

export default Messages;
