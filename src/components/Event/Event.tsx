import "./Event.scss";
import { EventDetailType } from "../../api/types";

const eventDetail: EventDetailType = {
  date: 'Mardi 20 juin 2023',
  type: 'Match Amical',
  start_at: 'Début du match: 18h00',
  end_at: 'Fin du match: 20h00',
  left_team: {
    name: 'Stade Rennais FC',
    score: 4,
  },
  right_team: {
    name: 'Lorient FC',
    score: 0,
  },
};  

export const Event = () => {
  return (
  <div className="event-container">
    <div className="event-detail">
      <div className="top-event-detail">
        <p className="white-text large-text">{eventDetail.date}</p>
        <p className="white-text small-text">{eventDetail.type}</p>
      </div>
      <div className="bottom-event-detail">
        <p>{eventDetail.start_at}</p>
        <p>{eventDetail.end_at}</p>
        <div className="game-detail">
          <p>{eventDetail.left_team.name}</p>
            <div className="score">
              <p className="win-text">{eventDetail.left_team.score}</p>
              <p>-</p>
              <p className="lose-text">{eventDetail.left_team.score}</p>
            </div>
          <p>{eventDetail.right_team.name}</p>
        </div>
      </div>
    </div>
    <div></div>
  </div>);

};
