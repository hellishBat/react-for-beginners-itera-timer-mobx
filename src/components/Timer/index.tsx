// Timer
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import TimerStatus from '../TimerStatus'
import Display from '../Display'
import Button from '../Button'
import { timerStore } from '../../store/TimerStore'

const Timer: FC = observer(() => {
  const { counter, isRunning } = timerStore

  useEffect(() => {
    let counterInterval: any

    if (isRunning) {
      counterInterval = setInterval(() => {
        timerStore.increaseTimer()
      }, 1000)
    }

    return () => clearInterval(counterInterval)
  }, [counter, isRunning])

  return (
    <div className="flex flex-col items-center max-w-[40rem] mx-auto py-16 rounded-xl shadow-lg bg-light bg-gradient text-white bg-gradient-to-r from-neutral-400 to-neutral-300">
      <TimerStatus isRunning={isRunning} />
      <div className="grid grid-cols-5 gap-4">
        <Display counter={counter} />
        <Button color="green" onClick={() => timerStore.setIsRunning()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </svg>
          Start
        </Button>
        <Button color="red" onClick={() => timerStore.setIsStopped()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M384 128v255.1c0 35.35-28.65 64-64 64H64c-35.35 0-64-28.65-64-64V128c0-35.35 28.65-64 64-64H320C355.3 64 384 92.65 384 128z" />
          </svg>
          Stop
        </Button>
        <Button color="blue" onClick={() => timerStore.setIsDefault()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z" />
          </svg>
        </Button>
      </div>
    </div>
  )
})

export default Timer
