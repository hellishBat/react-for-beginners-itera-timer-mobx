import { FC } from 'react'
import './App.css'
import Timer from './components/Timer'

const App: FC = () => {
  return (
    <>
      <main>
        <div className="py-10">
          <div className="container">
            <Timer />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
