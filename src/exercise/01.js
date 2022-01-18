// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(previousState, newState) {
  if (newState.type === 'INCREMENT') {
    return { ...previousState, count: previousState.count + newState.step }
  }

  return previousState
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const increment = () => dispatch({ type: 'INCREMENT', step })
  const { count } = state
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
