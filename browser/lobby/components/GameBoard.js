import React from 'react';
import Anime from 'react-anime';
import PlayerDisplayTurnContainer from '../containers/PlayerDisplayTurnContainer';
import RoundDisplayContainer from '../containers/RoundDisplayContainer';
import VoteDisplayContainer from '../containers/VoteDisplayContainer';
import QuestResultAnimation from './QuestResultAnimation';
import { default as Fade } from 'react-fade';
// <img alt={`game_board_${Object.keys(players).length}.png`}
// src={`/game_board_${Object.keys(players).length}.png`} />

const Gameboard = ({
  lobbyId,
  players,
  result,
  isFlipped,
  startFlipping,
  shuffle,
  startShuffling,
  questResult,
  gameState,
  showCard,
}) => (
  <div className={`game_board game_board_${Object.keys(players).length}`} >
    <div className="endGame">
      <Fade
        duration="1"
        style={{ visibility: 'visible' }}
      >
        <div>
          {result || null}
        </div>
        <div className="gameState">
          {
            gameState.state === 'choosing' ?
              <h4>{players[gameState.turnOrder[gameState.questLeader]].name} will choose the players for the quest</h4>
            : null
          }
        </div>
      </Fade>
    </div>
    <PlayerDisplayTurnContainer showCard={showCard} lobbyId={lobbyId} />
    <RoundDisplayContainer lobbyId={lobbyId} />
    <VoteDisplayContainer lobbyId={lobbyId} />
    <QuestResultAnimation
      isFlipped={isFlipped}
      startFlipping={startFlipping}
      shuffle={shuffle}
      startShuffling={startShuffling}
      questResult={questResult}
    />
  </div>
);

export default Gameboard;
