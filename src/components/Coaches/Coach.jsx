import React from 'react'
import { json } from 'react-router-dom'

export default function Coach({coach, seats}) {
  
  return (
    <div>
      {JSON.stringify(coach.coach, null, " ")}
    </div>
  )
}
