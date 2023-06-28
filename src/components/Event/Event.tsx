import "./Event.scss";
import EventDetail from "../EventDetail/EventDetail";
import Attendees from "../Attendee/Attendees";
import LastEvent from "../LastEvent/LastEvent";
import NextEvent from "../NextEvent/NextEvent";
import Profile from "../Profile/Profile";
import { useState, useEffect } from "react";
import { AttendeeType, EventDetailType, LastNextEventType, ProfileType } from "../../api/types";


export default function Event () {

  const [eventDetailObject, setEventDetailObject] = useState<EventDetailType | null>(null);
  const [attendeeObject, setAttendeeObject] = useState<AttendeeType[]>([]);
  const [lastEventObject, setLastEventObject] = useState<LastNextEventType | null>(null);
  const [nextEventObject, setNextEventObject] = useState<LastNextEventType | null>(null);
  const [profileObject, setProfileObject] = useState<ProfileType | null>(null);

  useEffect(() => {
    fetchData();
  }, [eventDetailObject, attendeeObject, lastEventObject, nextEventObject]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview');
      const jsonData = await response.json();
      setEventDetailObject(jsonData.event_detail);
      setAttendeeObject(jsonData.attendees)
      setLastEventObject(jsonData.last_event)
      setNextEventObject(jsonData.next_event)
      setProfileObject(jsonData.profile)
    } catch (error) {
      console.error('Error fetching event detail:', error);
    }
  };

  if (eventDetailObject === null) {
    // Handle the case when the data is not yet available
    return <div>Loading...</div>;
  }

  if (attendeeObject === null) {
    // Handle the case when the data is not yet available
    return <div>Loading...</div>;
  }

  if (lastEventObject === null) {
    // Handle the case when the data is not yet available
    return <div>Loading...</div>;
  }

  if (nextEventObject === null) {
    // Handle the case when the data is not yet available
    return <div>Loading...</div>;
  }

  if (profileObject === null) {
    // Handle the case when the data is not yet available
    return <div>Loading...</div>;
  }

  return (
  <div className="event-container">
    <div className="event-title">
      <h1>Feuille de match</h1>
    </div>
    <div className="event-middle">
      <div className="event-container-middle">
        <EventDetail eventDetail={eventDetailObject}/>
        <Attendees attendees={attendeeObject}/>
      </div>
      <div className="event-container-rightside">
        <Profile profile={profileObject}/>
        <LastEvent event={lastEventObject}/>
        <NextEvent event={nextEventObject}/>
      </div>
    </div>
  </div>);

};

export { Event };
