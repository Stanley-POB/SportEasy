import React from 'react'
import { LastNextEventType } from '../../api/types'
import "./LastEvent.scss"

type LastNextEventTypeProps = {
  event: LastNextEventType;
}

export default function LastEvent( {event} : LastNextEventTypeProps) {
  return (
    <div className='last-event-container'>
      <div className='last-event-game'> <p>Dernier match</p></div>
      <div className='last-event-teams'>
        <div className='team'>
          <p>{event.left_team.name}</p>
          <p className={
            event.left_team.score !== null && event.right_team.score
              ? (event.left_team.score > event.right_team.score ? 'winner' : 'loser')
              : 'undefined-score'
          }>
            {event.left_team.score !== null ? event.left_team.score : '-'}
          </p>
        </div>
        <div className='team'>
          <p>{event.right_team.name}</p>
          <p className={
            event.right_team.score !== null && event.left_team.score !== null
              ? (event.right_team.score > event.left_team.score ? 'winner' : 'loser')
              : 'undefined-score'
          }>
            {event.right_team.score !== null ? event.right_team.score : '-'}
          </p>
        </div>
      </div>
    </div>
  )
}
