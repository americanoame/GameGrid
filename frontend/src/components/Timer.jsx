import  { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, setGameOver }) => {
  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setGameOver, setTimeLeft]);

  return null;
};

export default Timer;
