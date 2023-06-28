import React from 'react'
import { LastNextEventType } from '../../api/types'
import "./NextEvent.scss"

type LastNextEventTypeProps = {
  event: LastNextEventType;
}

export default function NextEvent({event} : LastNextEventTypeProps) {
  return (
    <div className='next-event-container'>
    <div className='next-event-game'> <p>Prochain match</p></div>
    <div className='next-event-teams'>
        <div className='team'>
          <p>{event.left_team.name}</p>
          <p>{event.left_team.score}</p>
        </div>
        <div className='team'>
          <p>{event.right_team.name}</p>
          <p>{event.right_team.score}</p>
        </div>
      </div>
  </div>
  )
}
