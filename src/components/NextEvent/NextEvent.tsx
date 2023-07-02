import React from 'react'
import { LastNextEventType } from '../../api/types'
import "./NextEvent.scss"
import { useState, useEffect } from "react";


type LastNextEventTypeProps = {
  event: LastNextEventType;
}

export default function NextEvent({event} : LastNextEventTypeProps) {  
  return (
    <div className='next-event-container'>
      <div className='next-event-game'>
        <p>Prochain match</p>
      </div>
      <div className='next-event-teams'>
        <div className='team'>
          <p>{event.left_team.name}</p>
          <p className={
            event.left_team.score !== null && event.right_team.score
              ? (event.left_team.score > event.right_team.score ? 'winner' : 'loser')
              : 'undefined-score'
          }>
            {event.left_team.score !== null ? event.left_team.name : '-'}
          </p>
        </div>
        <div className='team'>
          <p>{event.right_team.name}</p>
          <p className={
            event.right_team.score !== null && event.left_team.score !== null
              ? (event.right_team.score > event.left_team.score ? 'winner' : 'loser')
              : 'undefined-score'
          }>
            {event.right_team.score !== null ? event.right_team.name : '-'}
          </p>
        </div>
      </div>
    </div>
  );
  
  
  
}
