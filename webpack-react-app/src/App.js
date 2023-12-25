import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App({ onGlobalStateChange, setGlobalState }) {
  const [count, setCount] = useState(0)
  const [mainCount] = useMainAppState(onGlobalStateChange)


  const onCountButtonClick = () => {
    setCount((count) => count + 1)
    setGlobalState?.({ reactCount: count + 1 })
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo sigle-react-logo" alt="React logo" />
        </a>
      </div>
      <h1>Webpack 5 + React 18</h1>
      <div className="card">
        <button onClick={onCountButtonClick}>
          count is {count}
        </button>
        {typeof mainCount === 'number' ? <p> Main app count is <b>{mainCount}</b></p> : null}
        <p>
          Edit <code>src/App.js</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

function useMainAppState(onGlobalStateChange) {
  const [mainCount, setMainCount] = useState(window.__POWERED_BY_QIANKUN__ ? 0 : undefined)

  useEffect(() => {
    if (typeof onGlobalStateChange === "function") {
      onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log("[react]onGlobalStateChange:" + state.count)
        setMainCount(state.count)
      })
    }
  }, [])
  return [mainCount]
}


export default App
