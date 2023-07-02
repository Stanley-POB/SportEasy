import "./EventDetail.scss"
import React from 'react'
import { EventDetailType } from "../../api/types";
import moment from 'moment';
import 'moment/locale/fr'; // Import the French locale

type EventDetailProps = {
    eventDetail: EventDetailType;
  }; 

export default function EventDetail( {eventDetail} : EventDetailProps ) {

  const formatDate = (dateString: any) => {
    const formattedDate = moment(dateString).locale('fr').format('dddd D MMMM YYYY');
    const capitalizedDate = formattedDate.replace(/^\w/, (c) => c.toUpperCase());
    return capitalizedDate;
  };

  const formattedDate = formatDate(eventDetail.date);

  return (
    <div className="event-detail">
        <div className="top-event-detail">
            <p className="white-text large-text">{formattedDate}</p>
            <p className="white-text small-text">{eventDetail.type}</p>
        </div>
        <div className="bottom-event-detail">
            <div className="game-time">
              <p>Début du match: {eventDetail.start_at}</p>
              <p>Fin du match: {eventDetail.end_at}</p>
            </div>
            <div className="score-detail">
                <p>{eventDetail.left_team.name}</p>
                <div className="score">
                  <p className={eventDetail.left_team.score !== null && eventDetail.right_team.score
              ? (eventDetail.left_team.score > eventDetail.right_team.score ? 'winner' : 'loser')
              : 'undefined-score'
          }>
            {eventDetail.left_team.score !== null ? eventDetail.left_team.score : '-'}
                  </p>
                    <p>-</p>
                    <p className={eventDetail.right_team.score !== null && eventDetail.left_team.score !== null
              ? (eventDetail.right_team.score > eventDetail.left_team.score ? 'winner' : 'loser')
              : 'undefined-score'
          }>
            {eventDetail.right_team.score !== null ? eventDetail.right_team.score : '-'}
                  </p>
                </div>
                <p>{eventDetail.right_team.name}</p>
            </div>
        </div>
    </div>
  )
}
