// TimerStatus
const TimerStatus = ({ isRunning }: { isRunning: boolean }) => {
  return (
    <h1 className="mb-8 text-3xl sm:text-5xl font-bold text-center">
      {isRunning ? 'Timer is running' : 'Timer is stopped'}
    </h1>
  )
}

export default TimerStatus
