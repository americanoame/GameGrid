

const GameOverModal = ({ message }) => {
  return (
    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center p-4 z-10 bg-black bg-opacity-70 rounded-lg">
      <span className="text-white font-[10px]">{message}</span>
    </p>
  );
};

export default GameOverModal;
