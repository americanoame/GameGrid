import GameGrid from "./components/GameGrid"


const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-950">
      <div className="p-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-md">
        <h1 className="text-2xl text-white font-[10px] text-center mb-4">Match 2 Game</h1>
        <GameGrid />
      </div>
    </div>
  )
}

export default App
