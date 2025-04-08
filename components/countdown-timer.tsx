"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ hours, minutes, seconds }: CountdownTimerProps) {
  const [time, setTime] = useState({
    hours,
    minutes,
    seconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col items-center">
        <div className="bg-amber-500 text-white text-2xl font-bold w-12 h-12 flex items-center justify-center rounded">
          {String(time.hours).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-gray-600">HORAS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-amber-500 text-white text-2xl font-bold w-12 h-12 flex items-center justify-center rounded">
          {String(time.minutes).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-gray-600">MINS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-amber-500 text-white text-2xl font-bold w-12 h-12 flex items-center justify-center rounded">
          {String(time.seconds).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-gray-600">SEGS</span>
      </div>
    </div>
  )
}
