import { useState, useEffect } from 'react';

const ROWS = 25;
const COLS = 25;
const INITIAL_SNAKE = [{ row: 12, col: 12 }];
const INITIAL_DIRECTION = 'RIGHT';

const generateFood = () => {
  return {
    row: Math.floor(Math.random() * ROWS),
    col: Math.floor(Math.random() * COLS),
  };
};

const App = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(generateFood());
  const [gameOver, setGameOver] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [score, setScore] = useState(0);

  const checkCollision = (snake: { row: number, col: number }[]) => {
    const head = snake[0];
    return (
      snake.slice(1).some((segment) => segment.row === head.row && segment.col === head.col) ||
      head.row < 0 ||
      head.row >= ROWS ||
      head.col < 0 ||
      head.col >= COLS
    );
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    if (!gameOver && !isPause) {
      const moveSnake = () => {
        const newSnake = snake.map((segment) => ({ ...segment }));
        const head = { ...newSnake[0] };

        switch (direction) {
          case 'UP':
            head.row = (head.row - 1 + ROWS) % ROWS;
            break;
          case 'DOWN':
            head.row = (head.row + 1) % ROWS;
            break;
          case 'LEFT':
            head.col = (head.col - 1 + COLS) % COLS;
            break;
          case 'RIGHT':
            head.col = (head.col + 1) % COLS;
            break;
          default:
            break;
        }

        newSnake.unshift(head);

        if (head.row === food.row && head.col === food.col) {
          setFood(generateFood());
          setScore(score + 10);
        } else {
          newSnake.pop();
        }

        if (checkCollision(newSnake)) {
          setGameOver(true);
        } else {
          setSnake(newSnake);
        }
      };

      const gameInterval = setInterval(moveSnake, 100);
      return () => {
        clearInterval(gameInterval);
      };
    }
  }, [snake, direction, food, gameOver, isPause, score]);

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      e.preventDefault();
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='flex flex-row-reverse max-xl:flex-col items-center'>
      <div className="m-auto relative w-[500px] max-w-full aspect-square border-2 border-windowBorder">
        <div
          className="grid grid-cols-[repeat(25,_1fr)] grid-rows-[repeat(25,_1fr)] w-full h-full"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
        >
          {Array.from({ length: ROWS }).map((_, rowIndex) =>
            Array.from({ length: COLS }).map((_, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-full h-full rounded ${snake.some((segment) => segment.row === rowIndex && segment.col === colIndex) ? 'bg-txPrimary' : ''} 
                ${food.row === rowIndex && food.col === colIndex ? 'bg-[red] rounded-full' : ''}`}
              />
            ))
          )}
        </div>
      </div>
      {gameOver && (
        <div className='absolute top-0 left-0 w-full h-full bg-body z-20 flex flex-col justify-center items-center'>
          <p>Game Over! <b>Your Score 🐍 {score}</b></p>
          <button onClick={resetGame} className='p-1 text-txLink !no-underline hover:bg-txLink hover:text-body'>[Restart]</button>
        </div>
      )}
      <div className='text-center mx-auto w-full lg:w-1/2'>
        <button onClick={() => { setIsPause(!isPause) }}> {isPause ? 'Resume' : 'Pause'}</button>
        <p> Score : 🚀 {score}</p>
        <div className='flex gap-4 justify-center max-lg:justify-between max-lg:[&_button]:w-full'>
          <button className="p-4 bg-neutral-600 focus:ring-4 focus:ring-slate-400 rounded-lg outline-none" onClick={() => setDirection('UP')} >↑</button>
          <button className="p-4 bg-neutral-600 focus:ring-4 focus:ring-slate-400 rounded-lg outline-none" onClick={() => setDirection('LEFT')} >←</button>
          <button className="p-4 bg-neutral-600 focus:ring-4 focus:ring-slate-400 rounded-lg outline-none" onClick={() => setDirection('RIGHT')}>→</button>
          <button className="p-4 bg-neutral-600 focus:ring-4 focus:ring-slate-400 rounded-lg outline-none" onClick={() => setDirection('DOWN')}>↓</button>
        </div>
      </div>
    </div>
  );
};

export default App;
