import React from 'react'
import { ProfileType } from '../../api/types'
import "./Profile.scss"

type ProfileTypeProps = {
  profile: ProfileType;
}

export default function Profile({profile} : ProfileTypeProps) {
  return (
    <div className='profile-container'>
      <div className='profile-img'>
        <img src={profile.photo_url} alt="profile" className='img'/>
      </div>
      <div className='profile-details'>
      <p>{profile.first_name} {profile.last_name}</p>
      <p>{profile.email}</p>
      <p>{profile.phone_number}</p>
      </div>
    </div>
  )
}
