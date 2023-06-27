import "./EventDetail.scss"
import React from 'react'
import { EventDetailType } from "../../api/types";

type EventDetailProps = {
    eventDetail: EventDetailType;
  }; 

export default function EventDetail( {eventDetail} : EventDetailProps ) {
  return (
    <div className="event-detail">
        <div className="top-event-detail">
            <p className="white-text large-text">{eventDetail.date}</p>
            <p className="white-text small-text">{eventDetail.type}</p>
        </div>
        <div className="bottom-event-detail">
            <p>Début du match: {eventDetail.start_at}</p>
            <p>Fin du match: {eventDetail.end_at}</p>
            <div className="game-detail">
                <p>{eventDetail.left_team.name}</p>
                <div className="score">
                    <p className="win-text">{eventDetail.left_team.score}</p>
                    <p>-</p>
                    <p className="lose-text">{eventDetail.right_team.score}</p>
                </div>
                <p>{eventDetail.right_team.name}</p>
            </div>
        </div>
    </div>
  )
}
