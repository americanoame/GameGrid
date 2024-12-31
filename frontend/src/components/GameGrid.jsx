import { useState, useEffect } from "react";
import GameGridBoard from "../components/GameGridBoard";
import Scoreboard from "../components/Scoreboard";
import GameOverModal from "../components/GameOverModal";

const shapes = ["🐯", "🦁", "🐸", "🐵", "🐢"];

const GameGrid = () => {
  const [grid, setGrid] = useState(generateGrid());
  const [selected, setSelected] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  function generateGrid() {
    const totalShapes = 25;
    return Array.from(
      { length: totalShapes },
      () => shapes[Math.floor(Math.random() * shapes.length)]
    );
  }

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameOver]);

  const handleShapeClick = (index) => {
    if (gameOver || selected.includes(index) || matchedIndices.includes(index))
      return;

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [firstIndex, secondIndex] = newSelected;

      if (grid[firstIndex] !== grid[secondIndex]) {
        setTimeout(() => {
          setSelected([]); // Reset selected shapes if they don't match
        }, 500);
      } else {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
        setScore((prevScore) => prevScore + 100);
        setSelected([]);
      }
    }
  };

  const restartGame = () => {
    setGrid(generateGrid());
    setSelected([]);
    setMatchedIndices([]);
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center">
      <GameGridBoard
        grid={grid}
        selected={selected}
        matchedIndices={matchedIndices}
        handleShapeClick={handleShapeClick}
      />
      <Scoreboard score={score} timeLeft={timeLeft} restartGame={restartGame} />
      {gameOver && <GameOverModal message="Game Over" />}
    </div>
  );
};

export default GameGrid;
