import "./Event.scss";
import EventDetail from "../EventDetail/EventDetail";
import { useState, useEffect } from "react";
import { EventDetailType } from "../../api/types";
import moment from 'moment';
import 'moment/locale/fr'; // Import the French locale

export const Event = () => {
  const [data, setData] = useState<EventDetailType | null>(null);

  const formatDate = (dateString: any) => {
    const formattedDate = moment(dateString).locale('fr').format('dddd D MMMM YYYY');
    const capitalizedDate = formattedDate.replace(/^\w/, (c) => c.toUpperCase());
    return capitalizedDate;
  };
  
  // Usage example
  const formattedDate = formatDate('2023-06-20');
  console.log(formattedDate); // Output: "mardi 20 juin 2023"


  useEffect(() => {
    fetchData();
    console.log('data:', data);
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview');
      const jsonData = await response.json();
      setData(jsonData.event_detail);
    } catch (error) {
      console.error('Error fetching event detail:', error);
    }
  };

  if (data === null) {
    // Handle the case when the data is not yet available
    return <div>Loading...</div>;
  }
  

  const eventDetailData: EventDetailType = {
    date: formatDate(data.date),
    type: data.type,
    start_at: data.start_at,
    end_at: data.end_at,
    left_team: {
      name: data.left_team.name,
      score: data.left_team.score,
    },
    right_team: {
      name: data.right_team.name,
      score: data.right_team.score,
    },
  };

  return (
  <div className="event-container">
    <EventDetail eventDetail={eventDetailData}/>
  </div>);

};
