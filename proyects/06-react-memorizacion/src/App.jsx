import './App.css'
import { Counter } from './components/Counter'
import { MemoTheory } from './components/MemoTheory'
import { UseCallbackTheory } from './components/UseCallbackTheory'
import { UseMemoTheory } from './components/UseMemoTheory'

function App() {
  return (
    <div>
      <h1>Memorizacion en React</h1>
      <hr />
      <h2>Teoría:</h2>
      <MemoTheory />
      <UseCallbackTheory />
      <UseMemoTheory />
      <hr />
      <Counter />
    </div>
  )
}

export default App
