import './App.css';
import { useCounter } from './useCounter';

function App() {
  const { count, increaseCount, decreaseCount } = useCounter();
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
    </div>
  );
}

export default App;
