// TimerStore
import { makeAutoObservable } from 'mobx'

export class TimerStore {
  isRunning = false
  counter = 0

  constructor() {
    makeAutoObservable(this)
  }

  setIsRunning() {
    this.isRunning = true
  }

  setIsStopped() {
    this.isRunning = false
    console.log('isStopped')
  }

  setIsDefault() {
    this.counter = 0
    console.log('isDefault')
  }

  increaseTimer() {
    this.counter += 1
  }
}

export const timerStore = new TimerStore()
