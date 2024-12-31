

const GameGridBoard = ({ grid, selected, matchedIndices, handleShapeClick }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mb-4">
      {grid.map((shape, index) => (
        <button
          key={index}
          className={`p-4 text-4xl rounded-md relative transform transition-transform ${
            matchedIndices.includes(index)
              ? "bg-green-200"
              : selected.includes(index)
              ? "bg-blue-300"
              : "bg-gray-200"
          }`}
          onClick={() => handleShapeClick(index)}
          disabled={matchedIndices.includes(index)}
        >
          <div
            className={`flip-card ${
              matchedIndices.includes(index) || selected.includes(index)
                ? "flipped"
                : ""
            }`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-back shape-size">
                {shape}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default GameGridBoard;
