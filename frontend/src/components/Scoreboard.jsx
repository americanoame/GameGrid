

const Scoreboard = ({ score, timeLeft, restartGame }) => {
  return (
    <div className="text-center">
      <p className="text-lg font-[10px] font-mono w-[150px] text-center">
        Score: <span className="inline-block w-[50px] text-right">{score}</span>
      </p>
      <p className="text-lg font-[10px] font-mono w-[200px] text-center">
        Time Left: {timeLeft.toString().padStart(2, "0")}s
      </p>

      <button
        className="w-full mt-4 px-4 py-2 text-white font-[10px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-500"
        onClick={restartGame}
      >
        Restart
      </button>
    </div>
  );
};

export default Scoreboard;
