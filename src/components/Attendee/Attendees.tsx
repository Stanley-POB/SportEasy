import React from 'react'
import "./Attendees.scss"
import { AttendeeType } from '../../api/types'

type AttendeesProps = {
  attendees: AttendeeType[];
};

export default function Attendees ({ attendees } : AttendeesProps) {
  const attendeesCount = attendees.length;
  return (
    <div className='attendee-container'>
      <div className='attendee-count'>
        <h3>{attendeesCount} joueurs convoqués</h3>
      </div>
      <table>
        <thead>
        <tr>
            <th>Photo</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee: AttendeeType) => (
            <tr key={attendee.email}>
              <td className='attendee-picture'>
                <img src={attendee.photo_url} alt="Attendee" />
              </td>
              <td>{attendee.last_name}</td>
              <td>{attendee.first_name}</td>
              <td>{attendee.email}</td>
              <td className={attendee.status === 'present' ? 'status-present' : 'status-absent'}>
                  {attendee.status}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
